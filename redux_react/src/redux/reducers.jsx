import { createStore, combineReducers, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";
import {
  GET_CONTENTS,
  LOG_IN_SUCCESS,
  FETCH_SUCCESS,
  FETCH_BEGIN,
  FETCH_FAILURE,
} from "./actions";

const initialState = {
  contents: [],
  logStatus: false,
  user: {},
  loding: false,
  error: null,
};
const contentReducers = (initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...initialState,
        loading: false,
        contents: action.payload.contents,
      };
    case FETCH_BEGIN:
      return {
        ...initialState,
        loading: true,
        error: null,
      };
    case FETCH_FAILURE:
      return {
        ...initialState,
        loading: false,
        error: action.payload.errrr,
      };
    default:
      return initialState;
  }
};

const logReducers = (initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...initialState,
        logStatus: true,
        user: action.payload.user,
      };
      break;
  }
};
const reducers = combineReducers({
  content: contentReducers,
  log: logReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
