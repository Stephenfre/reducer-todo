import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./reducers/index";

function App() {
  const [state, dispatch] = useReducer(initialState, todoReducer);
  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
