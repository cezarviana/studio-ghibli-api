const baseURL = "https://ghibliapi.vercel.app";

export const getMovies = async () => {
  const response = await fetch(`${baseURL}/films`);
  if (!response.ok) {
    throw new Error("Erro ao buscar filmes");
  }
  return response.json();
};

export const getMovieById = async (id: string) => {
  const response = await fetch(`${baseURL}/films/${id}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar filme");
  }
  return response.json();
};