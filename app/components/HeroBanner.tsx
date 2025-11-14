"use client";

import { Movie } from "../types/movie";


export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <div
      className="w-half h-[60vh] bg-conic-90 bg-center rounded-xl relative flex items-end p-6"
      style={{
        backgroundImage: `url(${movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient from-black/80 to-transparent"></div>

      <div className="relative z-10 max-w-xl">
        <h1 className="text-4xl font-bold mb-3">{movie.Title}</h1>
        <p className="text-sm opacity-90 mb-4">
          {movie.Year} • {movie.Type}
        </p>

        <a
          href={`/the-movie/${movie.imdbID}`}
          className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          More Info
        </a>
      </div>
    </div>
  );
}
