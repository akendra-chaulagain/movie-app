import axios from "axios";
// ReactToastify is use for alert
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getMovieFailure, getMovieStart, getMovieSuccess } from "./movieRedux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  updateFailure,
  updateStart,
  updateSuccess,
} from "./userRedux";

// success tostify
const tostifySuccess = {
  position: "top-center",
  autoClose: false,
  transition: Zoom,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  theme: "dark",
  progress: undefined,
};

// failure tostify
const tostifyFailure = {
  position: "top-center",
  autoClose: false,
  transition: Zoom,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  theme: "dark",
  progress: undefined,
};

// login
export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    toast.success("login success !", tostifySuccess);
  } catch (error) {
    dispatch(loginFailure());
    toast.error("Invalid data !", tostifyFailure);
  }
};

// register
export const registerUser = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/auth/register", user);
    dispatch(registerSuccess(res.data)).then(() => {
      toast.success("Register success...", tostifySuccess);
    });
  } catch (error) {
    dispatch(registerFailure());
    toast.error("unable to register user !", tostifyFailure);
  }
};



// get all movies
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
