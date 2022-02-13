

import axios from "axios"
import { LoginFailure, LoginStart, LoginSuccess } from "./Action"


export const loginCall = async (user, dispatch) => {
    dispatch(LoginStart())
    try {
        const res = await axios.post("/auth/login", user)
        res.data.isAdmin && dispatch(LoginSuccess(res.data))
        window.location.replace("/")
        alert("Login success..")


    } catch (error) {
        dispatch(LoginFailure())
        alert("something went wrong !")
    }

}