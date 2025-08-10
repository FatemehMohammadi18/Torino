"use server";
export default async function getData(query = "") {
  const url = query
    ? `http://localhost:6500/tour?${query}`
    : `http://localhost:6500/tour`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) return null;

  const data = await res.json();
  return data;
}
