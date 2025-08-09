"use server";
export default async function getData(filters = {}) {
  console.log(filters);
  const query = new URLSearchParams(filters).toString();
  console.log(query);
  const url = query
    ? `http://localhost:6500/tour?${query}`
    : `http://localhost:6500/tour`;
  console.log(url);
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) return null;

  const data = await res.json();
  return data;
}
