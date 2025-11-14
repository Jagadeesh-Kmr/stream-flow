"use client";

import { useState } from "react";
import MovieRow from "./MovieRow";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch(value: string) {
    setQuery(value);

    if (!value) {
      setResults([]);
      return;
    }

    const res = await fetch(`/api/search?q=${value}`);
    const data = await res.json();

    setResults(data.Search || []);
  }

  return (
    <div className="space-y-6">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full max-w-lg px-4 py-2 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500 transition"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {results.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-3">Search Results</h2>
          <MovieRow movies={results} />
        </div>
      )}
    </div>
  );
}
