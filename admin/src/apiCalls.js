

import axios from "axios"
import { LoginFailure, LoginStart, LoginSuccess } from "./context/authContext/Action"


export const loginCall = async (user, dispatch) => {
    dispatch(LoginStart())
    try {
        const res = await axios.post("/auth/login",user)
        dispatch(LoginSuccess(res.data))

    } catch (error) {
        dispatch(LoginFailure())
    }

}