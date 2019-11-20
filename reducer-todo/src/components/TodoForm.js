import React, { useState } from "react";
// import { initialState, todoReducer } from "../reducers/index";

const TodoForm = ({ dispatch }) => {
  const [newTodoTask, setNewTodoTask] = useState("");

  const handleChanges = e => {
    setNewTodoTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      payload: newTodoTask
    });
    setNewTodoTask("");
  };

  const clearCompleted = e => {
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTodoTask"
          value={newTodoTask}
          onChange={handleChanges}
        />
        <button type="submit">ADD TASK</button>
        <button onClick={clearCompleted}>Clear Complete</button>
      </form>
    </div>
  );
};

export default TodoForm;
