import { searchMovies } from "@/lib/omdb";
import MovieRow from "./components/MovieRow";
import HeroBanner from "./components/HeroBanner";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";


export default async function Home() {
  const batman = await searchMovies("Batman");
  const avengers = await searchMovies("Avengers");
  const comedy = await searchMovies("Comedy");
  const horror = await searchMovies("Horror");

  const heroMovie = batman.Search[9];

  return (
    <>
          <Header />
 <main className="p-6 mt-10 text-white space-y-10">
      
      <HeroBanner movie={heroMovie} />

            <SearchBar />


      <section>
        <h2 className="text-2xl font-bold mb-3">Batman Movies</h2>
        <MovieRow movies={batman.Search} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Avengers Movies</h2>
        <MovieRow movies={avengers.Search} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Comedy Collection</h2>
        <MovieRow movies={comedy.Search} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">Horror Movies</h2>
        <MovieRow movies={horror.Search} />
      </section>
    </main>

    </>
   
  );
}
