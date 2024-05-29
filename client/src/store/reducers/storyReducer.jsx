import actionTypes from "../actions/actionTypes";

const initState = {
    stories: [],
    msg: '',
    count: 0,
    story: [],
    chapters: [],
    chapter_detail: []
}

const storyReducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.GET_ALL_STORY_FOR_SEARCH:
        case actionTypes.GET_STORIES:
        case actionTypes.GET_STORIES_LIMIT:
        case actionTypes.GET_STORIES_BY_GENRE:
            return{
                ...state,
                stories: action.stories || [],
                msg: action.msg || '',
                count: action.count || 0
            }
            
        case actionTypes.GET_STORY_BY_ID:
            // console.log("Reducer received story:", action.story);
            return {
                ...state,
                story: action.story || null,
                msg: action.msg || '',
            };
        case actionTypes.GET_CHAPTER_BY_STORY_ID:
            return {
                ...state,
                chapters: action.chapters || [],
                msg: action.msg || '',
            }
        case actionTypes.GET_CHAPTER_DETAIL_BY_CHAPTER_ID:
            return{
                ...state,
                chapter_detail: action.chapter_detail || null,
                msg: action.msg || '',
            }
        default:
            return state;
    }

}

export default storyReducer