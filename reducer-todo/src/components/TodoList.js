import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, dispatch }) => {
  const handleToggle = id => {
    dispatch({
      type: "TASK_COMPLETED",
      payload: id
    });
    console.log("click working");
  };

  return (
    <div>
      {todos.map(item => (
        <Todo handleToggle={handleToggle} key={item.id} {...item} />
      ))}
    </div>
  );
};
export default TodoList;
