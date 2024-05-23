import axiosConfig from "../axiosConfig";

export const apiGetAllStory = () =>
  new Promise( (resolve, reject) => {
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
    new Promise( (resolve, reject) => {
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