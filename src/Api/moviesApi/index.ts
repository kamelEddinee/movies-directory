import { MoviesApiFetch } from "../axios";

export const getmoviesList = async (filter) => {
  const { page, limit, search, genre } = filter;
  let params = "";
  if (page) params += `page=${page}`;
  if (limit) params += `&limit=${limit}`;
  if (search) params += `&search=${search}`;
  if (genre) params += `&genre=${genre}`;
  //  debugger;
  const movies = await MoviesApiFetch.get(`/movies?${params}`);
  return movies.data;
};

export const getMoviesWithGenre = async (filter) => {
  const moviesWithGenre = await MoviesApiFetch.get(`/genres/movies`);
  return moviesWithGenre.data;
};

export const getOneGenreDetails = async (id: number) => {
  const OneGenreDetails = await MoviesApiFetch.get(`/movies/genres/${id}`);
  return OneGenreDetails.data;
};

export const getOneMovie = async (id: number) => {
  const OneMovieDetails = await MoviesApiFetch.get(`/movies/${id}`);
  return OneMovieDetails.data;
};
