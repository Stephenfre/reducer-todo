import React from "react";

const Todo = props => {
  return (
    <div
      className={`${props.completed ? "completed" : ""}`}
      onClick={() => props.handleToggle(props.id)}
    >
      <p> {props.item}</p>
    </div>
  );
};

export default Todo;
