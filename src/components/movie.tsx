import { memo } from "react";
import type { IMovie } from "./interfaces";

const imgPath = "https://image.tmdb.org/t/p/w500/";
const Movie = (movie: IMovie) => {
  return (
    <div className="col-12 col-md-3 pt-4">
      <div
        className="bg-secondary text-white movie-card gap-3 align-items-center rounded"
        style={{ height: "390px" }}
      >
        <div>
          <img src={imgPath + movie.poster_path} style={{ width: "200px" }} />
        </div>
        <div className="p-3">
          <p>{movie.title}</p>
          <p className="card-text"> overview: {movie.overview}</p>
          <p>language: {movie.original_language}</p>
        </div>
      </div>
    </div>
  );
};
export default memo(Movie);
