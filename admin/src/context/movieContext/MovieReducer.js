const MovieReducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIES_SATART":
            return {
                movies: [],
                isFetching: true,
                error: false
            };
        case "GET_MOVIES_SUCCESS":
            return {
                movies: action.payload,
                isFetching: false,
                error: false
            };
        case "GET_MOVIES_FAILURE":
            return {
                movies: [],
                isFetching: false,
                error: true
            };


        // create movie reducer
        case "CREATE_MOVIES_SATART":
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case "CREATE_MOVIES_SUCCESS":
            return {
                movies: [...state.movies, action.payload],
                isFetching: false,
                error: false
            };
        case "CREATE_MOVIES_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            };


        default:
            return { ...state };
    }
}

export default MovieReducer;