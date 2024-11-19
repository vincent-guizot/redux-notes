import { createStore, combineReducers } from "redux";
import reducers from "../../../redux-note/src/redux/reducers";

const initialState = {
  contents: [],
  loggedIn: false,
  user: {},
};

const ACTIONS = {
  // CONTENTS
  GET_CONTENTS: "get_contents",
  ADD_CONTENT: "add_contents",
  REMOVE_CONTENT: "remove_contents",
  EDIT_CONTENT: "edit_content",
  FETCH_SUCCESS: "fetch_success",
  FETCH_FAILURE: "fetch_failure",
  FETCH_ERROR: "fetch_error",

  // LOG
  LOG_IN: "login",
  LOG_IN_SUCCESS: "login_success",
  LOG_IN_FAILURE: "login_failure",
};

const contentReducers = (initialState, action) => {
  switch (action.type) {
  }
};

const logReducers = (initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOG_IN_SUCCESS:
      break;
  }
};
const reducers = combineReducers({
  content: contentReducers,
  log: logReducers,
});

const store = createStore(reducers);
