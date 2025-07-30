"use server";
export async function getData(filters = {}) {
  if (typeof filters.then === "function") {
    filters = await filters;
  }

  const plainFilters = filters.entries
    ? Object.fromEntries([...filters.entries()])
    : filters;

  const safeFilters = Object.fromEntries(
    Object.entries(plainFilters).map(([key, value]) => [
      String(key),
      String(value),
    ])
  );

  const params = new URLSearchParams(safeFilters).toString();

  const res = await fetch(
    `http://localhost:6500/tour${params ? "?" + params : ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return;

  const data = await res.json();
  return data;
}
