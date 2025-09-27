import type { IMovie } from "../interfaces/interfaces";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchData from "./axiosCall";

const MovieDetails = () => {
  const imgPath = "https://image.tmdb.org/t/p/w500/";
  const { id } = useParams();
  const [movieDetails, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    fetchData(`http://localhost:3000/results/${id}`).then((res: IMovie) => {
      setMovie(res);
    });
  });
  const handleEdit = () => {};
  const handleRemove = () => {};

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container pt-5 d-flex flex-row align-items-end">
      <div style={{ height: "400px" }}>
        <img
          style={{ height: "100%" }}
          src={imgPath + movieDetails.poster_path}
          alt="movie image"
          className="pe-5"
        />
      </div>
      <div className="d-flex flex-column">
        <div>movie title: {movieDetails?.title}</div>
        <div>movie original title: {movieDetails?.original_title}</div>
        <p>{movieDetails?.overview}</p>
        <div>{movieDetails?.popularity}</div>
        <div>{movieDetails?.release_date}</div>
        <div>{movieDetails?.adult}</div>
        <div className="d-flex justify-content-around">
          <button onClick={handleEdit} type="button">
            Edit
          </button>
          <button onClick={handleRemove} className="bg-danger" type="button">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
