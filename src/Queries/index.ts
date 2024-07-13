import { getmoviesList, getMoviesWithGenre } from "@/Api/moviesApi";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export function useGetMoviesQuery(filter?: any) {
  return useQuery({
    queryKey: ["movies", filter],
    queryFn: () => getmoviesList(filter),
  });
}
export function useGetMoviesWithGenreQuery(filter?: any) {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => getMoviesWithGenre(filter),
  });
}
