import axios from "axios"
import { deleteMoviesFailure, deleteMoviesStart, deleteMoviesSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieAction"


export const getMoviesall = async (dispatch) => {
    dispatch(getMoviesStart())
    try {
        const res = await axios.get("/movies", {
            // headers: { token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken }
            headers: {
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDczNDYzMCwiZXhwIjoxNjQ1MTY2NjMwfQ.E3TKGuILa-XpMdf3HMiz9plBwqxYytjhZbOG9GJCwDM"
            }
        })
        dispatch(getMoviesSuccess(res.data))
    } catch (error) {
        dispatch(getMoviesFailure())
    }
}




// delete movie
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMoviesStart())
    try {
        await axios.delete("/movies/" + id, {
            headers: {
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDczNDYzMCwiZXhwIjoxNjQ1MTY2NjMwfQ.E3TKGuILa-XpMdf3HMiz9plBwqxYytjhZbOG9GJCwDM"
            }
        })
        dispatch(deleteMoviesSuccess(id))
    } catch (error) {
        dispatch(deleteMoviesFailure())
    }
}


