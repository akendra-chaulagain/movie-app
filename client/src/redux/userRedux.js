import { createSlice } from "@reduxjs/toolkit";

export const userSlicer = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    //   reducer for login
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, actions) => {
      state.isFetching = false;
      state.currentUser = actions.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //   reducer for register
    registerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser[
        state.currentUser.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.user;
      state.error = false;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //   reducer for update
    updateStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    updateFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // logout user
    logOutStart: (state) => {
      state.isFetching = true;
    },
    logOutSuccess: (state) => {
      state.isFetching = false;
      state.currentUser = localStorage.removeItem("persist:root");
    },
    logOutfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loginFailure,
  loginSuccess,
  loginStart,
  registerFailure,
  registerStart,
  registerSuccess,
  logOutStart,
  logOutSuccess,
  logOutfailure,
  updateFailure,
  updateStart,
  updateSuccess,
} = userSlicer.actions;

export default userSlicer.reducer;
