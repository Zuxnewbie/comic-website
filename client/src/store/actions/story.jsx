import actionTypes from "./actionTypes";
import {
  apiGetAllStory,
  apiGetAllStoryByGenre,
  apiGetAllStoryLimit,
  apiGetChapterByStoryID,
  apiGetChapterDetail,
  apiGetStoryByID,
  apiGetAllStoryForSearch
} from "../../services/listStory";

// get all for something
export const getAllStoryForSearch = () => async (dispatch) => {
  try {
    const response = await apiGetAllStoryForSearch();
    // console.log("response from search: ", response);

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_ALL_STORY_FOR_SEARCH,
        stories: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_ALL_STORY_FOR_SEARCH,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_STORY_FOR_SEARCH,
      stories: null,
    });
  }
};


export const getStories = () => async (dispatch) => {
  try {
    const response = await apiGetAllStory();
    // console.log("response from action: ", response);

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_STORIES,
        stories: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_STORIES,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_STORIES,
      stories: null,
    });
  }
};

export const getStoriesLimit = (query) => async (dispatch) => {
  try {
    const response = await apiGetAllStoryLimit(query);
    // console.log("response from action: ", response);

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_STORIES_LIMIT,
        stories: response.data.response?.rows,
        count: response.data.response?.count,
      });
    } else {
      dispatch({
        type: actionTypes.GET_STORIES_LIMIT,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_STORIES_LIMIT,
      stories: null,
    });
  }
};

export const getStoryByGenre = (query) => async (dispatch) => {
  try {
    const response = await apiGetAllStoryByGenre(query);
    console.log("response from action: ", response);

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_STORIES_BY_GENRE,
        stories: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_STORIES_BY_GENRE,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_STORIES_BY_GENRE,
      stories: null,
    });
  }
};

export const getStoryByID = (story_id) => async (dispatch) => {
  try {
    const response = await apiGetStoryByID(story_id);
    // console.log("API response:", response);

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

export const getChapterByStoryID = (story_id) => async (dispatch) => {
    try {
      const response = await apiGetChapterByStoryID(story_id);
      // console.log("API response:", response.data.response.chapters);
  
      if (response?.data.err === 0) {
        dispatch({
          type: actionTypes.GET_CHAPTER_BY_STORY_ID,
          chapters: response.data.response,
        });
      } else {
        dispatch({
          type: actionTypes.GET_CHAPTER_BY_STORY_ID,
          msg: response.data.msg,
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.GET_CHAPTER_BY_STORY_ID,
        chapters: null,
      });
    }
  };


  export const getChapterDetail = (chapter_id) => async (dispatch) => {
    try {
      const response = await apiGetChapterDetail(chapter_id);
      // console.log("API getChapterDetail response:", response);
  
      if (response?.data.err === 0) {
        dispatch({
          type: actionTypes.GET_CHAPTER_DETAIL_BY_CHAPTER_ID,
          chapter_detail: response.data.response,
        });
      } else {
        dispatch({
          type: actionTypes.GET_CHAPTER_DETAIL_BY_CHAPTER_ID,
          msg: response.data.msg,
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.GET_CHAPTER_DETAIL_BY_CHAPTER_ID,
        chapter_detail: null,
      });
    }
  };

  export const getStoryByStatusFull = () => async (dispatch) => {
    try {
      const response = await apiGetChapterDetail();
      console.log("API getStoryByStatusFull response:", response);
  
      if (response?.data.err === 0) {
        dispatch({
          type: actionTypes.GET_STORY_STATUS_FULL,
          stories: response.data.response,
        });
      } else {
        dispatch({
          type: actionTypes.GET_STORY_STATUS_FULL,
          msg: response.data.msg,
        });
      }
    } catch (error) {
      dispatch({
        type: actionTypes.GET_STORY_STATUS_FULL,
        stories: null,
      });
    }
  };