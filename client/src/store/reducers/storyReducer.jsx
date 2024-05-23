import actionTypes from "../actions/actionTypes";

const initState = {
    stories: [],
    msg: '',
    count: 0
}

const storyReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.GET_STORIES:
        case actionTypes.GET_STORIES_LIMIT:
            return{
                ...state,
                stories: action.stories || [],
                msg: action.msg || '',
                count: action.count || 0
            }
        default:
            return state;
    }

}

export default storyReducer