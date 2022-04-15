import axios from "axios";
// ReactToastify is use for alert
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getMovieFailure, getMovieStart, getMovieSuccess } from "./movieRedux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";

// login
export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    window.location.replace("/");
  } catch (error) {
    dispatch(loginFailure());
    toast.success("Enter correct email and password !", {
      position: "top-center",
      autoClose: "2000",
    });
  }
};
// register
export const registerUser = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure());
    toast.success("Enter correct email and password !", {
      position: "top-center",
      autoClose: "2000",
    });
  }
};
// register
export const getAllMovie = async (dispatch) => {
  dispatch(getMovieStart());
  try {
    const res = await axios.get("/movies/getall");
    dispatch(getMovieSuccess(res.data));
  } catch (error) {
    dispatch(getMovieFailure());
    console.log("unable to get all movies");
  }
};
