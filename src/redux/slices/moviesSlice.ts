import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import apiCall from "../../components/axiosCall"
import type { IMovie } from '../../interfaces/interfaces'

export interface MoviesSliceState {
  movies: IMovie[]
}

const initialState: MoviesSliceState = {
  movies: [],
}

export const getMovies = createAsyncThunk("movies/getAll", async () => {
  return await apiCall("http://localhost:3000/results").then((res) => res)
})

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMovies.fulfilled, (state, { type, payload }) => {
      state.movies = payload;
    })
  }
})

// Action creators are generated for each case reducer function
// export const { } = moviesSlice.actions

export default moviesSlice.reducer