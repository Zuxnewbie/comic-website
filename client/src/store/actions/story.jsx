import actionTypes from "./actionTypes";
import { apiGetAllStory } from "../../services/listStory";
export const getStories =  () => async (dispatch) =>  {
    try {
        const response = await apiGetAllStory()
        // console.log("response from action: ", response);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_STORIES,
                stories: response.data.response
            })
        }else{
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_STORIES,
            stories: null
        })
    }
}