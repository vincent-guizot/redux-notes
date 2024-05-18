import { combineReducers } from "redux";

const numberReducers = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case "LOG_IN":
      return !state;
    default:
      return state;
  }
};

const reducers = combineReducers({
  number: numberReducers,
  loggedIn,
});

export default reducers;

// combineReducers = menggabungkan beberapa reducers
// 1. harus lebih dari 1
