import { mkdir, writeFile } from 'node:fs/promises';

const namespace = 'philipkim-blog';
const apiBase = 'https://api.counterapi.dev/v1';
const historyDays = 30;
const outFile = new URL('../data/visitors.json', import.meta.url);

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

async function fetchCount(name) {
  const response = await fetch(`${apiBase}/${namespace}/${name}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    if (response.status === 404) {
      return 0;
    }
    throw new Error(`Failed to fetch ${name}: HTTP ${response.status}`);
  }

  const data = await response.json();
  return Number(data.count ?? data.value ?? 0);
}

const total = await fetchCount('home-total');
const history = await Promise.all(
  Array.from({ length: historyDays }, (_, index) => {
    const offset = historyDays - index;
    const day = dayKey(offset);
    return fetchCount(`home-${day.iso}`).then((count) => ({
      date: day.iso,
      count,
    }));
  }),
);

await mkdir(new URL('../data/', import.meta.url), { recursive: true });
await writeFile(
  outFile,
  `${JSON.stringify(
    {
      updatedAt: new Date().toISOString(),
      timezone: 'Asia/Seoul',
      total,
      history,
    },
    null,
    2,
  )}\n`,
  'utf8',
);
