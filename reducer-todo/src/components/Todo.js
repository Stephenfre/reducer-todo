import React from "react";

const Todo = ({ state, dispatch }) => {
  // const handleClick = e => {
  //   e.preventDefault();
  //   props.toggleCompleted(props.item.id);
  // };

  return (
    <div>
      <p> {state.item}</p>
    </div>
  );
};

export default Todo;
