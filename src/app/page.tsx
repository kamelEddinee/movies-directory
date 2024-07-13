"use client";
import { useGetMoviesQuery } from "@/Queries";
import MovieCard from "@/components/MovieCart";
import { Input } from "@/components/ui/input";
import { PaginationDemo } from "@/components/paginationDemo";
import { useRef, useState } from "react";
import { ComboboxDemo } from "@/components/ui/combobox";

interface MovieQueryParams {
  page: number;
  limit: number;
  search?: string;
  genre?: string;
}

export default function Home() {
  const [queryParams, setQueryParams] = useState<MovieQueryParams>({
    page: 1,
    limit: 25,
    search: "",
    genre: "",
  });

  const { data, isError, error, isLoading, isSuccess } =
    useGetMoviesQuery(queryParams);
  const MoviesList = data?.data;
  const totalPages = data?.totalPages;
  const ref = useRef(null);

  const [value, setValue] = useState("");

  console.log(queryParams);
  return (
    <main className="bg-gray-500 min-h-screen p-32">
      <div className=" flex justify-between mx-auto">
        <div>Search By Movies</div>
        <Input
          placeholder="Search By Movie name"
          ref={ref}
          className=" w-1/3"
          onChange={(e) => {
            setQueryParams((prevParams) => ({
              ...prevParams,
              search: e.target.value,
              page: 1,
            }));
          }}
        />

        <div>Search By Genre</div>
        <Input
          placeholder="Search By Genre"
          ref={ref}
          className=" w-1/3"
          onChange={(e) => {
            setQueryParams((prevParams) => ({
              ...prevParams,
              genre: e.target.value,
              page: 1,
            }));
          }}
        />
        <ComboboxDemo genres={["genre 1"]} value={value} setValue={setValue} />
      </div>
      <div className="w-[80%] mx-auto pt-8">
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {isError && (
          <div className="text-red-500 text-center">{error.message}</div>
        )}
        {MoviesList && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {MoviesList.map((movie: Movie, index: number) => (
              <MovieCard movie={movie} key={index} />
            ))}
          </div>
        )}
      </div>
      <div>
        <PaginationDemo
          totalPages={totalPages}
          selectedPage={queryParams.page}
          setSelectedPage={(page) => {
            setQueryParams({ ...queryParams, page });
          }}
          paginationNumber={5}
        />
      </div>
    </main>
  );
}
