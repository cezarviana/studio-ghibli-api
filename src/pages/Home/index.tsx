import { useEffect, useState } from "react";
import "../../styles/globals.css";


export const Home = () => {
  interface Movie {
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

  const [movies, setMovies] = useState<Movie[]>([]);
  const baseURL = "https://ghibliapi.vercel.app";

  const getMovies = async () => {
    try {
      const response = await fetch(`${baseURL}/films`);
      const movieData: Movie[] = await response.json();

      setMovies(movieData);

      console.log(movieData);
    } catch (error) {
      console.error("Error retrieving the movie:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <main className="flex flex-wrap w-full justify-center items-center gap-10">
        {movies.map((movie) => (
          <div className="flex flex-col w-60 justify-center items-center mb-8 transition-transform ease-in-out duration-400 hover:scale-115">
            <a href="#">
              <img
                src={movie.image}
                alt={movie.original_title_romanised} className="mb-2"/>
              <div className="flex flex-col justify-center items-center text-center">
                <p className="text-center">{movie.original_title}</p>
                <p className="text-center">
                  {movie.original_title_romanised}
                </p>
                <p className="text-center">{movie.title}</p>
              </div>
            </a>
          </div>
        ))}
      </main>
    </>
  );
}

