// import actionTypes from "./actionTypes";
// import { apiGetGenreDetails } from "../../services/genreDetail";

// export const getGenreDetails =  (query) => async (dispatch) =>  {
//     try {
//         const response = await apiGetGenreDetails(query)
//         console.log("response from action: ", response);

//         // if (response?.data.err === 0) {
//         //     dispatch({
//         //         type: actionTypes.GET_GENRE_DETAILS,
//         //         genres: response.data.response?.rows,
//         //         count: response.data.response?.count,
//         //     })
//         // }else{
//         //     dispatch({
//         //         type: actionTypes.GET_GENRE_DETAILS,
//         //         msg: response.data.msg,
//         //          genres: null
//         //     })
//         // }
//     } catch (error) {
//         dispatch({
//             type: actionTypes.GET_GENRE_DETAILS,
//             genres: null
//         })
//     }
// }