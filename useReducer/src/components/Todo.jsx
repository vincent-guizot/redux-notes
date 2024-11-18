import React, { useState, useReducer } from "react";

const initialState = {
  todos: [],
};

const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
};

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return { ...state, todos: [...state.todos, newTodo(action.payload)] };
      break;
    case "TOGGLE_TODO":
      break;
  }
};

const newTodo = (task) => {
  return { id: Date.now(), task, status: false };
};

function Todo() {
  const [todos, dispatch] = useReducer(reducers, initialState);
  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: task });
  };

  return (
    <div className="text-center mx-auto">
      <form onSubmit={submitHandler}>
        <input
          className="my-2 p-3 border border-gray-500"
          onChange={(e) => setTask(e.target.value)}
          type="text"
        />
      </form>
      <hr />
      <div>
        {/* {JSON.stringify(todos)} */}
        <ul>
          {todos.todos.map((todo) => {
            const { id, task, status } = todo;
            return <li key={id}>{task}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
