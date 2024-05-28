import axiosConfig from "../axiosConfig";

export const apiGetAllStory = () =>
  new Promise((resolve, reject) => {
    axiosConfig({
      method: "get",
      url: "/api/v1/story/all",
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const apiGetAllStoryLimit = (page) =>
  new Promise((resolve, reject) => {
    axiosConfig({
      method: "get",
      url: `/api/v1/story/limit?page=${page}`,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const apiGetAllStoryByGenre = (cate) =>
  new Promise((resolve, reject) => {
    axiosConfig({
      method: "get",
      url: `/api/v1/genre/detail?cate=${cate}`,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const apiGetStoryByID = (storyID) =>
  new Promise((resolve, reject) => {
    axiosConfig({
      method: "get",
      url: `/api/v1/story/detail-test/?story_id=${storyID}`,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const apiGetChapterByStoryID = (storyID) =>
  new Promise((resolve, reject) => {
    axiosConfig({
      method: "get",
      url: `/api/v1/chapter/chapter-list?story_id=${storyID}`,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const apiGetChapterDetail = (chapterID) =>
  new Promise((resolve, reject) => {
    axiosConfig({
      method: "get",
      url: `/api/v1/chapter/chapter-detail?chapter_id=${chapterID}`,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
