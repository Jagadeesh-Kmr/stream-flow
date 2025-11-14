import { NextResponse } from "next/server";

const API_KEY = process.env.OMDB_API_KEY;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";

  if (!query) return NextResponse.json({ Search: [] });

  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );

  const data = await res.json();

  if (data.Response === "False") return NextResponse.json({ Search: [] });

  return NextResponse.json(data);
}
