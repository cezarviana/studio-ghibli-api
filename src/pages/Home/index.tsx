import { useEffect, useState } from "react";
import "../../styles/globals.css";
import { Link } from "react-router-dom";

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
  url: string;
  people?: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
  };
  species?: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
  };
  vehicles?: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
  };
}

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
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

      console.log(movieData);
    } catch (error) {
      console.error("Erro ao buscar o filme8:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <main className="flex flex-wrap w-full justify-center items-center gap-10">
        {movies.map((movie) => (
          <Link to={`/film/${movie.id}`} key={movie.id}>
            <div className="flex flex-col w-60 justify-center items-center mb-8 transition-transform ease-in-out duration-400 hover:scale-115">
              <a href="">
                <img
                  src={movie.image}
                  alt={movie.original_title_romanised}
                  className="mb-2 shadow-lg shadow-black"
                />
                <div className="flex flex-col justify-center items-center text-center bg-gray-300/50 rounded-sm p-4">
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
