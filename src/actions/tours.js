"use server";
export default async function getData(query = "") {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = query ? `${baseUrl}/tour?${query}` : `${baseUrl}/tour`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) return null;

  const data = await res.json();
  return data;
}
