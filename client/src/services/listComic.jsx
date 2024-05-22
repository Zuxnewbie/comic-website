import axiosConfig from "../axiosConfig";

export const apiAllComic = () =>
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


