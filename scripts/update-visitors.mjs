import { mkdir, readFile, writeFile } from 'node:fs/promises';

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
    if (response.status === 404 || response.status === 400) {
      return 0;
    }
    throw new Error(`Failed to fetch ${name}: HTTP ${response.status}`);
  }

  const data = await response.json();
  return Number(data.count ?? data.value ?? 0);
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

function buildHistory(snapshots) {
  return snapshots.slice(1).map((entry, index) => ({
    date: entry.date,
    count: Math.max(0, entry.total - snapshots[index].total),
  }));
}

const total = await fetchCount('home-total');
const existing = await readExistingSnapshot();
const snapshotDate = dayKey(1).iso;
const snapshotsByDate = new Map(
  snapshotsFromHistory(existing, total).map((entry) => [entry.date, entry]),
);
snapshotsByDate.set(snapshotDate, {
  date: snapshotDate,
  total,
});

const snapshots = Array.from(snapshotsByDate.values())
  .sort((a, b) => a.date.localeCompare(b.date))
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
