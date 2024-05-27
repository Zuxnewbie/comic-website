import actionTypes from "../actions/actionTypes";

const initState = {
    msg: '',
    genres: []
}

const genreReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.GET_GENRE_DETAILS:
            return{
                ...state,
                genres: action.genres || [],
                msg: action.msg || '',
                count: action.count || 0
            }
        default:
            return state;
    }

}

export default genreReducer