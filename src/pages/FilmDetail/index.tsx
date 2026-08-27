import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Movie } from "../Home";
import loadingGif from "../../assets/catbus-loading.gif"

export const FilmDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState<Movie | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://ghibliapi.vercel.app/films/${id}`)
      .then((response) => response.json())
      .then((movie: Movie) => {
        setFilm(movie);
        console.log(movie);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!film) {
    return (
      <div className="flex flex-col items-center justify-center mb-20 text-white">
        <p className="flex text-3xl mb-20">
          Loading...
        </p>
        ;
        <img src={loadingGif} alt="loading movie" className="flex items-center justify-center rounded-lg w-90 mb-4" />
      </div>
    );
  }

  return (
    <section className="flex flex-col w-full items-center mb-10">
      <h2 className="text-2xl font-light mb-10 text-white">Film Details:</h2>

      <div className="flex flex-col w-full justify-center items-center mb-8">
        <img
          src={film.image}
          alt={film.original_title_romanised}
          className="mb-4 w-60 mx-4 shadow-lg shadow-black"
        />
        <div className="bg-gray-300/50 rounded-sm p-6 mx-6 shadow-lg shadow-black">
          <div className="flex flex-col justify-center items-center text-center gap-4">
            <p className="text-center">{film.original_title}</p>
            <p className="text-center">{film.original_title_romanised}</p>
            <p className="text-center mb-8">{film.title}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center max-w-150 gap-4">
            <p className="text-center">Description: {film.description}</p>
            <p className="text-center">Director: {film.director}</p>
            <p className="text-center">Producer: {film.producer}</p>
            <p className="text-center">release date: {film.release_date}</p>
            <p className="text-center">
              running time: {film.running_time} min.
            </p>
            <p className="text-center">rate: {film.rt_score}</p>
          </div>
        </div>
        <Link to="/" aria-label="back to home">
          <p className="bg-gray-300/50 rounded-sm m-4 p-6 font-bold transition-transform ease-in-out duration-400 hover:scale-108 shadow-lg shadow-black">
            Back to Home
          </p>
        </Link>
      </div>
    </section>
  );
};
