"use client";

import { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

export default function MovieRow({ movies }: { movies: Movie[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide">
     {[...new Map(movies.map(m => [m.imdbID, m])).values()].map((m) => (
  <MovieCard key={m.imdbID} movie={m} />
))}

    </div>
  );
}
