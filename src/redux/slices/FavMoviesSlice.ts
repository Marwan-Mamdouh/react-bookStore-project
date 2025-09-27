import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IMovie } from "../../interfaces/interfaces";

export interface FavMovieSlice {
  favMovies: IMovie[]
}

const initialState: FavMovieSlice = {
  favMovies: []
}

export const favMovieSlice = createSlice({
  name: "favMovies",
  initialState,
  reducers: {
    addToFav(state, { payload }: PayloadAction<IMovie>) { state.favMovies.push(payload) },
    removeFav(state, { payload }: PayloadAction<IMovie>) { state.favMovies = state.favMovies.filter((movie) => movie.id !== payload.id) }
  }
})

export const { addToFav, removeFav } = favMovieSlice.actions

export default favMovieSlice.reducer