

export const getMoviesStart = () => ({
    type: "GET_MOVIES_SATART",
});

export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies,
});

export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
});




export const deleteMoviesStart = () => ({
    type: "DELETE_MOVIES_SATART",
});

export const deleteMoviesSuccess = (id) => ({
    type: "DELETE_MOVIES_SUCCESS",
    payload: id,
});
export const deleteMoviesFailure = () => ({
    type: "DELETE_MOVIES_FAILURE",

});
