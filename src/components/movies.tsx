import { useEffect, useState } from "react";
import apiCall from "./axiosCall";
import { type IMovie } from "./interfaces";
import Movie from "./movie";

const { results } = await apiCall(
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
);

const Movies = () => {
  const [movies, setMoviesArray] = useState<IMovie[]>([]);
  useEffect(() => {
    setMoviesArray(results);
  }, [setMoviesArray]);

  if (movies.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="container">
      <section className="row g-5">
        {movies.map((u) => (
          <Movie key={u.id} {...u}></Movie>
        ))}
      </section>
    </section>
  );
};

export default Movies;
