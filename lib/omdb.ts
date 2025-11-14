const API_BASE = "https://www.omdbapi.com/";
const API_KEY = process.env.OMDB_API_KEY;

// Search movies by keyword (e.g., "Avengers")
export async function searchMovies(query: string) {
  const res = await fetch(`${API_BASE}?apikey=${API_KEY}&s=${query}`, {
    next: { revalidate: 60 },
  });
  
  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
}

// Get full details by IMDb ID (e.g., "tt0848228")

export async function getMovieDetails(imdbID: string) {
  console.log(imdbID)
    const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
  );

  const data = await res.json();
  console.log(data)

  if (data.Response === "False") {
    throw new Error("Invalid movie ID");
  }

  return data;
}
