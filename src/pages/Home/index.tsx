import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loadingGif from "../../assets/catbus-loading.gif";

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: number;
  rt_score: number;
  url: string
}

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const baseURL = "https://ghibliapi.vercel.app";

  const getMovies = async () => {
    try {
      const response = await fetch(`${baseURL}/films`);
      const movieData: Movie[] = await response.json();

      const firstTenMovies = [...movieData]
        .sort((firstMovie, secondMovie) =>
          firstMovie.title.localeCompare(secondMovie.title, "EN"),
        )
        .slice(0, 10);

      setMovies(firstTenMovies);
    } catch (error) {
      console.error("Erro ao buscar o filme8:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center mb-20 text-white">
        <p className="flex text-3xl mb-20">Loading...</p>
        <img
          src={loadingGif}
          alt="loading movie"
          className="flex items-center justify-center rounded-lg w-90 mb-4"
        />
      </div>
    );
  }

  return (
    <>
      <main className="flex flex-wrap w-full justify-center items-center px-6 py-2 gap-10">
        {movies.map((movie) => (
          <Link to={`/film/${movie.id}`} key={movie.id}>
            <div className="flex flex-col w-60 justify-center items-center mb-8 transition-transform ease-in-out duration-400 hover:scale-115">
              <a href="">
                <img
                  src={movie.image}
                  alt={movie.original_title_romanised}
                  className="mb-2 shadow-lg shadow-black"
                />
                <div className="flex flex-col justify-center items-center text-center bg-gray-300/50 rounded-sm p-4 shadow-lg shadow-black">
                  <p className="text-center">{movie.original_title}</p>
                  <p className="text-center">
                    {movie.original_title_romanised}
                  </p>
                  <p className="text-center">{movie.title}</p>
                </div>
              </a>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
};
