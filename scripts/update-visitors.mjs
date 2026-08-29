import { mkdir, readFile, writeFile } from 'node:fs/promises';

const apiBase = process.env.VISITOR_API_BASE_URL?.replace(/\/$/, '');
const historyDays = 30;
const outFile = new URL('../data/visitors.json', import.meta.url);

if (!apiBase) {
  throw new Error('VISITOR_API_BASE_URL is required. Add your Cloudflare Worker URL as a GitHub Actions repository secret.');
}

function dateParts(date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    iso: `${map.year}-${map.month}-${map.day}`,
    label: `${map.month}/${map.day}`,
  };
}

function dayKey(offset) {
  return dateParts(new Date(Date.now() - offset * 86400000));
}

async function fetchStats() {
  const response = await fetch(`${apiBase}/stats`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch visitor stats: HTTP ${response.status}`);
  }

  const data = await response.json();
  const total = Number(data.total ?? 0);
  if (!Number.isFinite(total)) {
    throw new Error('Visitor API returned an invalid total');
  }
  return { total };
}

async function readExistingSnapshot() {
  try {
    return JSON.parse(await readFile(outFile, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {};
    }
    throw error;
  }
}

function snapshotsFromHistory(existing, total) {
  const snapshots = Array.isArray(existing.snapshots)
    ? existing.snapshots
      .map((entry) => ({
        date: entry.date,
        total: Number(entry.total),
      }))
      .filter((entry) => entry.date && Number.isFinite(entry.total))
    : [];

  if (snapshots.length > 0) {
    return snapshots;
  }

  const history = Array.isArray(existing.history)
    ? existing.history
      .map((entry) => ({
        date: entry.date,
        count: Number(entry.count) || 0,
      }))
      .filter((entry) => entry.date)
    : [];

  if (history.length === 0) {
    return [];
  }

  const historyTotal = history.reduce((sum, entry) => sum + entry.count, 0);
  let runningTotal = Math.max(0, Number(total) - historyTotal);
  return history.map((entry) => {
    runningTotal += entry.count;
    return {
      date: entry.date,
      total: runningTotal,
    };
  });
}

function cleanSnapshots(snapshots) {
  let previousTotal = -1;
  return snapshots
    .sort((a, b) => a.date.localeCompare(b.date))
    .filter((entry) => {
      if (!entry.date || !Number.isFinite(entry.total) || entry.total < previousTotal) {
        return false;
      }
      previousTotal = entry.total;
      return true;
    });
}

function buildHistory(snapshots) {
  return snapshots.slice(1).map((entry, index) => ({
    date: entry.date,
    count: Math.max(0, entry.total - snapshots[index].total),
  }));
}

const { total } = await fetchStats();
const existing = await readExistingSnapshot();
const snapshotDate = dayKey(1).iso;
const snapshotsByDate = new Map(
  cleanSnapshots(snapshotsFromHistory(existing, total)).map((entry) => [entry.date, entry]),
);
snapshotsByDate.set(snapshotDate, {
  date: snapshotDate,
  total,
});

const snapshots = cleanSnapshots(Array.from(snapshotsByDate.values()))
  .slice(-(historyDays + 1));
const history = buildHistory(snapshots).slice(-historyDays);

await mkdir(new URL('../data/', import.meta.url), { recursive: true });
await writeFile(
  outFile,
  `${JSON.stringify(
    {
      updatedAt: new Date().toISOString(),
      timezone: 'Asia/Seoul',
      total,
      snapshots,
      history,
    },
    null,
    2,
  )}\n`,
  'utf8',
);
