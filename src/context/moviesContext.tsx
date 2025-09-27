import { createContext, useEffect, useState } from "react";
import type { IMovie } from "../interfaces/interfaces";
import apiCall from "../components/axiosCall";

export const movieContext = createContext<IMovie[] | []>([]);

const MoviesContextProvider = ({ children }) => {
  const [movies, setMoviesArray] = useState<IMovie[] | []>([]);
  useEffect(() => {
    apiCall("http://localhost:3000/results").then((res) => {
      setMoviesArray(res);
    });
  }, []);

  return (
    <movieContext.Provider value={movies}> {children}</movieContext.Provider>
  );
};

export default MoviesContextProvider;
