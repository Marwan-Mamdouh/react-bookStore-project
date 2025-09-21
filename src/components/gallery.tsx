import { memo, useState } from "react";
import apiCall from "./axiosCall";

const data = await apiCall(
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
);

const PhotoGallery = () => {
  console.log(data.data.results);
  const [movie] = useState(data.data.results);
  return (
    <section className="">
      {movie.map((element) => {
        console.log(element);
      })}
    </section>
  );
};

export default memo(PhotoGallery);
