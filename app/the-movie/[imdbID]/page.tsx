import { getMovieDetails } from "@/lib/omdb";


export default async function MovieDetailPage({ params }: any) {
  const { imdbID } = await params; // 👈 THIS is required in Next.js 16

  const movie = await getMovieDetails(imdbID);

  return (
  <div className="relative p-8 text-white max-w-5xl mx-auto space-y-8">

  {/* Title */}
  <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
    {movie.Title}
  </h1>

  {/* Poster + Details */}
  <div className="flex flex-col md:flex-row gap-10">

    {/* Poster */}
    <div className="flex-shrink-0">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        className="rounded-xl w-64 shadow-2xl border border-white/10"
      />
    </div>

    {/* Info */}
    <div className="space-y-5">
      <p className="text-lg leading-relaxed text-gray-200 max-w-xl">
        {movie.Plot}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <p className="bg-white/10 p-3 rounded-lg backdrop-blur-md border border-white/10">
          <span className="opacity-70 block">Released</span>
          <span className="font-semibold">{movie.Released}</span>
        </p>

        <p className="bg-white/10 p-3 rounded-lg backdrop-blur-md border border-white/10">
          <span className="opacity-70 block">Genre</span>
          <span className="font-semibold">{movie.Genre}</span>
        </p>

        <p className="bg-white/10 p-3 rounded-lg backdrop-blur-md border border-white/10">
          <span className="opacity-70 block">IMDb Rating</span>
          <span className="font-semibold text-yellow-300">
            ⭐ {movie.imdbRating}
          </span>
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-4">
        <button className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition font-semibold">
          Watch Trailer
        </button>

        <button className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition font-semibold">
          Add to Watchlist
        </button>
      </div>
    </div>
  </div>
</div>

  );
}
