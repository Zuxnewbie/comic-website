import axiosConfig from "../axiosConfig";

export const apiBanner = () =>
  new Promise( (resolve, reject) => {
    axiosConfig({
      method: "get",
      url: "/api/v1/banner/getbanner",
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });


