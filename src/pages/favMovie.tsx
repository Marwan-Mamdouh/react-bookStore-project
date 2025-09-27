import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import Movie from "../components/movie";

const FavMovie = () => {
  const { favMovies } = useSelector((state: RootState) => state.favMovies);
  return (
    <div className="container">
      <div className="row d-flex pt-3 align-items-center">
        {favMovies.map((movie) => (
          <Movie key={movie.id} {...movie}></Movie>
        ))}
      </div>
    </div>
  );
};

export default FavMovie;
