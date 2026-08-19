import { useEffect, useState } from 'react'
import './styles/globals.css'


function App() {

  interface Movie {
    id: number,
    title: string,
    originalTitle: string,
    originalTitleRomanised: string,
    image: string,
    movieBanner: string,
    description: string,
    director: string,
    producer: string,
    releaseDate: string,
    runningTime: number,
    rateScore: number,
    url: string,
    people?: {
      0: string,
      1: string,
      2: string,
      3: string,
      4: string,
      5: string,
      6: string,
      7: string,
      8: string,
      9: string,
    },
    species?: {
      0: string,
      1: string,
      2: string,
      3: string,
      4: string,
      5: string,
      6: string,
      7: string,
      8: string,
      9: string,
    },
    vehicles?: {
      0: string,
      1: string,
      2: string,
      3: string,
      4: string,
      5: string,
      6: string,
      7: string,
      8: string,
      9: string,
    }
  }

  const [movies, setMovies] = useState<Movie[]>([]);
  const baseURL = 'https://ghibliapi.vercel.app';

  const getMovies = async () => {
    try {
      const response = await fetch(`${baseURL}/films`);
      const movieData: Movie[] = await response.json();

      setMovies(movieData);

      console.log(movieData);
    } catch (error) {
      console.error('Error retrieving the movie:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>

    <main className='flex flex-wrap gap-4'>
      <a href='#' className='m-10 font-bold'>
        <h1>Studio Ghibli</h1>
      </a>

    {movies.map((movie) => (

      <div className='flex flex-col justify-center items-center mb-14'>
        <img src={movie.image} alt={movie.originalTitleRomanised} className='flex w-70' />
        <h2 className='text-center'>{movie.originalTitleRomanised}</h2>
        <h2 className='text-center'>{movie.originalTitle}</h2>
        <p>sadsad</p>
      </div>
    ))}

    </main>
     
    </>
  )
}

export default App
