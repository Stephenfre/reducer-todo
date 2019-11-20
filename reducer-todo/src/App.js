import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialState, todoReducer } from "./reducers/index";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList todos={state.todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
