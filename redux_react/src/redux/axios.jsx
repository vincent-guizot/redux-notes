import axios from "axios";
// import Swal

import { fetchBegin, fetchFailure, fetchSuccess } from "./actions";

const URL = "http//localhost:3000";

function handleErrors(err) {
  if (!err.ok) {
    throw Error(err.statusText);
  }
  return err;
}

export const getContents = async () => {
  return (dispatch) => {
    dispatch(fetchBegin());
    return axios({
      method: "GET",
      url: URL + "/contents",
    })
      .then(handleErrors)
      .then((result) => {
        dispatch(fetchSuccess(result.data));
        return result.data;
      })
      .catch((err) => dispatch(fetchFailure(err)));
  };
};
