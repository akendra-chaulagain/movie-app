

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

// create


export const createMoviesStart = () => ({
    type: "CREATE_MOVIES_SATART",
});

export const createMoviesSuccess = (movie) => ({
    type: "CREATE_MOVIES_SUCCESS",
    payload: movie,
});

export const createMoviesFailure = () => ({
    type: "CREATE_MOVIES_FAILURE",
});



