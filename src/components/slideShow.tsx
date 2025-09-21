import { memo, useState } from "react";
import apiCall from "./axiosCall.ts";
import Movie from "./movie.tsx";

const { results } = await apiCall(
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
);

const SlideShow = () => {
  const [movies] = useState(results);
  const [index, setIndex] = useState(0);

  const handleRightClick = () =>
    setIndex((i) => Math.min(++i, movies.length - 1));

  const handleLeftClick = () => setIndex((i) => Math.max(--i, 0));

  return (
    <div className="d-flex p-2 justify-content-evenly align-items-center">
      <button type="button" onClick={handleLeftClick} className="rounded-3">
        backward
      </button>
      <Movie {...movies[index]}></Movie>
      <button type="button" onClick={handleRightClick} className="rounded-3">
        forward
      </button>
    </div>
  );
};

export default memo(SlideShow);
