"use client";

import Link from "next/link";
import { Movie } from "../types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/the-movie/${movie.imdbID}`}>
      <div className="min-w-[150px] cursor-pointer hover:scale-105 transition">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          className="rounded-lg"
        />
        <p className="mt-2 font-semibold text-sm">{movie.Title}</p>
        <p className="opacity-70 text-xs">{movie.Year}</p>
      </div>
    </Link>
  );
}