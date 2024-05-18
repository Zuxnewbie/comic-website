import axiosConfig from "../axiosConfig";

export const apiRegister = (payload) =>
  new Promise((resolve, reject) => {
    axiosConfig({
      method: "post",
      url: "/api/v1/auth/register",
      data: payload,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

  export const apiLogin = (payload) =>
    new Promise((resolve, reject) => {
      axiosConfig({
        method: "post",
        url: "/api/v1/auth/login",
        data: payload,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
