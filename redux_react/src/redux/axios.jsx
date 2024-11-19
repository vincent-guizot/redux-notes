import axios from "axios";
// import Swal

import { fetchBegin, fetchFailure, fetchSuccess } from "./actions";

const URL = "http://localhost:3000";

function handleErrors(response) {
  if (response.statusText !== "OK") {
    throw Error(response.statusText);
  }
  return response;
}

export const getContents = () => {
  return (dispatch) => {
    dispatch(fetchBegin());
    axios({
      method: "GET",
      url: URL + "/contents",
    })
      .then(handleErrors)
      .then((result) => {
        console.log(result.data);
        dispatch(fetchSuccess(result.data));
        // return result.data;
      })
      .catch((err) => dispatch(fetchFailure(err)));
  };
};
