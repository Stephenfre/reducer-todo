import React from "react";
import Todo from "./Todo";

const TodoList = ({ state, dispatch }) => {
  return (
    <div>
      {state.map(item => (
        <Todo key={item.id} item={item} />
      ))}
    </div>
  );
};
export default TodoList;
