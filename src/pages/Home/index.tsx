import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading/loading";
import type { Movie } from "../../types/movie";
import { getMovies } from "../../services/movies";

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

  const loadMovies = async () => {
    try {
      const movieData = await getMovies();

      const firstTenMovies = [...movieData]
        .sort((firstMovie, secondMovie) =>
          firstMovie.title.localeCompare(secondMovie.title, "EN"),
        )
        .slice(0, 10);

      setMovies(firstTenMovies);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  loadMovies();
}, []);



  return (
    <>
      {isLoading ? <Loading isLoading={true} /> : null}

      <main className="flex flex-wrap w-full justify-center items-center px-6 py-2 gap-10">
        {movies.map((movie) => (
          <Link to={`/film/${movie.id}`} key={movie.id}>
            <div className="flex flex-col w-60 justify-center items-center mb-8">
              <img
                src={movie.image}
                alt={movie.original_title_romanised}
                className="mb-2 shadow-lg shadow-black"
              />
              <div className="flex flex-col justify-center items-center text-center bg-gray-300/50 rounded-sm p-4 shadow-lg shadow-black">
                <p>{movie.original_title}</p>
                <p>{movie.original_title_romanised}</p>
                <p>{movie.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
};