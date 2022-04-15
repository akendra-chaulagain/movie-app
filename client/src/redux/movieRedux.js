import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //   reducer for login
    getMovieStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getMovieSuccess: (state, actions) => {
      state.isFetching = false;
      state.movies = actions.payload;
      state.error = false;
    },
    getMovieFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getMovieFailure, getMovieStart, getMovieSuccess } =
  movieSlice.actions;

export default movieSlice.reducer;
