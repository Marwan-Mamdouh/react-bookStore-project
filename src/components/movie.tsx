import { addToFav, removeFav } from "../redux/slices/FavMoviesSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import type { AppDispatch, RootState } from "../redux/store";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type { IMovie } from "../interfaces/interfaces";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { memo, useState } from "react";
import { blueGrey } from "@mui/material/colors";

const imgPath = "https://image.tmdb.org/t/p/w500/";

const Movie = (movie: IMovie) => {
  const { favMovies } = useSelector((state: RootState) => state.favMovies);
  const [isToggled, setToggled] = useState(
    favMovies.some((mov) => mov.id === movie.id)
  );

  const handleToggle = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = isToggled
      ? dispatch(removeFav(movie))
      : dispatch(addToFav(movie));
    setToggled(!isToggled);
  };

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card
      sx={{
        maxWidth: 300,
        maxHeight: 600,
        pt: 1,
        m: "auto",
        mb: 5,
        backgroundColor: blueGrey["A400"],
      }}
    >
      <CardMedia
        component={"img"}
        height={370}
        image={`${imgPath}${movie.poster_path}`}
        alt="movie poster"
      />
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {movie.original_title}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="caption"
        >
          AKA {movie.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {movie.overview}
        </Typography>
        <Typography variant="subtitle2">
          original lang: {movie.original_language}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add movie to fav" onClick={handleToggle}>
          {isToggled ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default memo(Movie);
