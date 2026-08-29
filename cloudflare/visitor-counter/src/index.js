const allowedOrigins = new Set([
  'https://philipdekim-ond01.github.io',
  'http://localhost:8000',
  'http://127.0.0.1:8000',
]);

function corsHeaders(request) {
  const origin = request.headers.get('Origin');
  const allowOrigin = origin && allowedOrigins.has(origin) ? origin : '*';
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Cache-Control': 'no-store',
  };
}

function json(request, body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(request),
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

function seoulDate() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());

  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

async function ensureSchema(env) {
  await env.DB.batch([
    env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS counters (
        name TEXT PRIMARY KEY,
        value INTEGER NOT NULL DEFAULT 0,
        updated_at TEXT NOT NULL
      )
    `),
    env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS daily_visits (
        date TEXT PRIMARY KEY,
        count INTEGER NOT NULL DEFAULT 0,
        updated_at TEXT NOT NULL
      )
    `),
  ]);
}

async function readStats(env) {
  const totalRow = await env.DB.prepare(
    'SELECT value FROM counters WHERE name = ?',
  ).bind('home-total').first();

  const history = await env.DB.prepare(
    'SELECT date, count FROM daily_visits ORDER BY date DESC LIMIT 30',
  ).all();

  return {
    total: Number(totalRow?.value ?? 0),
    history: (history.results ?? [])
      .map((entry) => ({
        date: entry.date,
        count: Number(entry.count ?? 0),
      }))
      .sort((a, b) => a.date.localeCompare(b.date)),
  };
}

async function recordVisit(env) {
  const now = new Date().toISOString();
  const today = seoulDate();

  await env.DB.batch([
    env.DB.prepare(`
      INSERT INTO counters (name, value, updated_at)
      VALUES (?, 1, ?)
      ON CONFLICT(name) DO UPDATE SET
        value = value + 1,
        updated_at = excluded.updated_at
    `).bind('home-total', now),
    env.DB.prepare(`
      INSERT INTO daily_visits (date, count, updated_at)
      VALUES (?, 1, ?)
      ON CONFLICT(date) DO UPDATE SET
        count = count + 1,
        updated_at = excluded.updated_at
    `).bind(today, now),
  ]);

  return readStats(env);
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(request) });
    }

    const url = new URL(request.url);
    if (request.method !== 'GET') {
      return json(request, { error: 'Method not allowed' }, 405);
    }

    await ensureSchema(env);

    if (url.pathname === '/visit') {
      return json(request, await recordVisit(env));
    }

    if (url.pathname === '/stats') {
      return json(request, await readStats(env));
    }

    return json(request, { ok: true, endpoints: ['/visit', '/stats'] });
  },
};
