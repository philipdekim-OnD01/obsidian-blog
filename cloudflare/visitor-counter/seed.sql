INSERT INTO counters (name, value, updated_at)
VALUES ('home-total', 780, '2026-08-30T00:00:00.000Z')
ON CONFLICT(name) DO UPDATE SET
  value = MAX(value, excluded.value),
  updated_at = excluded.updated_at;
