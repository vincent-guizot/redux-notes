import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const actions = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return { count: state.count + 1 };
    case actions.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Basic() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => {
    dispatch({ type: actions.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: actions.DECREMENT });
  };
  return (
    <div className="text-center mx-auto  center">
      <div>Basic useReducer</div>
      <hr />
      <div className="flex flex-row text-center mx-auto">
        <button
          onClick={increment}
          className="rounded-md bg-green-500 hover:bg-green-700 hover:text-white mr-2 px-3 py-2"
        >
          Tambah
        </button>
        <h1 className="font-bold text-3xl">{state.count}/</h1>
        <button
          onClick={decrement}
          className="rounded-md bg-red-500 hover:bg-red-700 hover:text-white ml-2 px-3 py-2"
        >
          Kurang
        </button>
      </div>
    </div>
  );
}

export default Basic;
