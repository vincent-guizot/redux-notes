import { createStore, combineReducers, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";

import ACTIONS from "./actions";

const { FETCH_BEGIN, FETCH_FAILURE, FETCH_SUCCESS } = ACTIONS;

const initialState = {
  contents: [],
  logStatus: false,
  user: {},
  loading: false,
  error: null,
};

const contentReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        contents: action.payload.contents,
      };
    case FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.err,
      };
    default:
      return state;
  }
};

// const logReducers = (initialState, action) => {
//   switch (action.type) {
//     case LOG_IN_SUCCESS:
//       return {
//         ...initialState,
//         logStatus: true,
//         user: action.payload.user,
//       };
//       break;
//     default:
//       return initialState;
//   }
// };

const reducers = combineReducers({
  content: contentReducers,
  // log: logReducers,
});

export default reducers;
