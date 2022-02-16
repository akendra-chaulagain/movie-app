

import axios from "axios"
import { LoginFailure, LoginStart, LoginSuccess } from "./Action"


export const loginCall = async (user, dispatch) => {
    dispatch(LoginStart())
    try {
        const res = await axios.post("/auth/login", user)
        dispatch(LoginSuccess(res.data))
        alert("Login success..")
        window.location.replace("/")


    } catch (error) {
        dispatch(LoginFailure())
        alert("something went wrong !")
    }

}