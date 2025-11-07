export function readQueryNumber(name: string, fallback: number) {
  if (typeof window === "undefined") return fallback;
  const url = new URL(window.location.href);
  const v = url.searchParams.get(name);
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

export function writeQuery(params: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));
  window.history.replaceState(null, "", url.toString());
}

export function clearQuery(keys: string[]) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  keys.forEach(k => url.searchParams.delete(k));
  window.history.replaceState(null, "", url.toString());
}