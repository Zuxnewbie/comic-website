import actionTypes from "../actions/actionTypes";

const initState = {
    stories: [],
    msg: ''
}

const storyReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.GET_STORIES:
            return{
                ...state,
                stories: action.stories || [],
                msg: action.msg || ''
            }
    
        default:
            return state;
    }

}

export default storyReducer