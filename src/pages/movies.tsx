import type { AppDispatch, RootState } from "../redux/store";
import { movieContext } from "../context/moviesContext";
import { getMovies } from "../redux/slices/moviesSlice";
import type { IMovie } from "../interfaces/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import Movie from "../components/movie";

const Movies = () => {
  // const movies = useContext(movieContext);
  const { movies } = useSelector((state: RootState) => state.movies);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (movies?.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <div className="row d-flex pt-3 align-items-center">
        {movies?.map((u: IMovie) => (
          <Movie key={u.id} {...u}></Movie>
        ))}
      </div>
    </div>
  );
};

export default Movies;
