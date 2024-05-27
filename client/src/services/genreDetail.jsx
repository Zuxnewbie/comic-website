import axiosConfig from "../axiosConfig";

export const apiGetGenres = () =>
  new Promise( (resolve, reject) => {
    axiosConfig({
      method: "get",
      url: "/api/v1/category/all",
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });


