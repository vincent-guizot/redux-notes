export const ACTIONS = {
  // CONTENTS
  GET_CONTENTS: "get_contents",
  ADD_CONTENT: "add_contents",
  REMOVE_CONTENT: "remove_contents",
  EDIT_CONTENT: "edit_content",
  FETCH_BEGIN: "fetch_begin",
  FETCH_SUCCESS: "fetch_success",
  FETCH_FAILURE: "fetch_failure",

  // LOG
  LOG_IN: "login",
  LOG_IN_SUCCESS: "login_success",
  LOG_IN_FAILURE: "login_failure",
};

export const fetchBegin = () => {
  return {
    type: ACTIONS.FETCH_BEGIN,
  };
};

export const fetchSuccess = (contents) => {
  return {
    type: ACTIONS.FETCH_SUCCESS,
    payload: { contents },
  };
};

export const fetchFailure = (error) => {
  return {
    type: ACTIONS.FETCH_FAILURE,
    payload: { error },
  };
};
