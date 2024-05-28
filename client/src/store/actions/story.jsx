import actionTypes from "./actionTypes";
import { apiGetAllStory, apiGetAllStoryByGenre, apiGetAllStoryLimit, apiGetStoryByID } from "../../services/listStory";
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
                type: actionTypes.GET_STORIES,
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

export const getStoriesLimit =  (query) => async (dispatch) =>  {
    try {
        const response = await apiGetAllStoryLimit(query)
        // console.log("response from action: ", response);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_STORIES_LIMIT,
                stories: response.data.response?.rows,
                count: response.data.response?.count
            })
        }else{
            dispatch({
                type: actionTypes.GET_STORIES_LIMIT,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_STORIES_LIMIT,
            stories: null
        })
    }
}


export const getStoryByGenre =  (query) => async (dispatch) =>  {
    try {
        const response = await apiGetAllStoryByGenre(query)
        console.log("response from action: ", response);
        

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_STORIES_BY_GENRE,
                stories: response.data.response,
            })
        }else{
            dispatch({
                type: actionTypes.GET_STORIES_BY_GENRE,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_STORIES_BY_GENRE,
            stories: null
        })
    }
}



export const getStoryByID = (story_id) => async (dispatch) => {
    try {
      const response = await apiGetStoryByID(story_id);
      console.log("API response:", response);
  
      if (response?.data.err === 0) {
        dispatch({
          type: actionTypes.GET_STORY_BY_ID,
          story: response.data.response,
        });
      } else {
        dispatch({
          type: actionTypes.GET_STORY_BY_ID,
          msg: response.data.msg,
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.GET_STORY_BY_ID,
        story: null,
      });
    }
  };