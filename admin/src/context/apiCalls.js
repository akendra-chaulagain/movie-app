import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./authContext/AuthAction";

export const login = async (user, dispatch) => {
    dispatch(loginStart);
    try {
        const res = await axios.post("/auth/login/", user)
        res.data.isAdmin && dispatch(loginSuccess(res.data))
        alert("login success..")

    } catch (error) {
        dispatch(loginFailure);
    }
}