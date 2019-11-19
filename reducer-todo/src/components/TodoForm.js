import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/index";

const TodoForm = ({ dispatch }) => {
  const [newTodoTask, setNewTodoTask] = useState({});

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
      </form>
    </div>
  );
};

//   const handleChanges = e => {
//     setNewTitleText(e.target.value);
//   };

//   return (
//     <div>
//       {!state.editing ? (
//         <h1>
//           {state.title}{" "}
//           <i
//             className="far fa-edit"
//             onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
//           />
//         </h1>
//       ) : (
//           <div>
//             <input
//               className="title-input"
//               type="text"
//               name="newTitleText"
//               value={newTitleText}
//               onChange={handleChanges}
//             />
//             <button
//               onClick={() => {
//                 dispatch({ type: "SET_TITLE", payload: newTitleText });
//                 setNewTitleText("");
//                 dispatch({ type: "TOGGLE_EDITING" });
//               }}
//             >
//               Update title
//           </button>
//           </div>
//         )}
//     </div>
//   );
// };

// export default Title;

export default TodoForm;
