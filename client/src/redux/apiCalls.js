import axios from "axios";
// ReactToastify is use for alert
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    // window.location.replace("/");
  } catch (error) {
    dispatch(loginFailure());
    toast.success("Enter correct email and password !", {
      position: "top-center",
      autoClose: "2000",
    });
  }
};
