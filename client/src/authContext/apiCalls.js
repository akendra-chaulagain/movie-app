

import axios from "axios"
import { LoginFailure, LoginStart, LoginSuccess } from "./Action"
// ReactToastify is use for alert
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export const loginCall = async (user, dispatch) => {
    dispatch(LoginStart())
    try {
        const res = await axios.post("/auth/login", user)
        dispatch(LoginSuccess(res.data))
        window.location.replace("/")

    } catch (error) {
        dispatch(LoginFailure())
        toast.success("Enter correct email and password !", {
            position: "top-center",
            autoClose: "2000"
        }
        );
    }

}

