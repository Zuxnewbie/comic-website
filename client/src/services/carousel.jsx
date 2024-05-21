import axiosConfig from "../axiosConfig";

export const apiGetCarousel = () =>
  new Promise( (resolve, reject) => {
    axiosConfig({
      method: "get",
      url: "/api/v1/carousel",
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });


