export const initialState = {
  todos: [
    {
      item: "Learn Reduce",
      completed: true,
      id: 3892987589
    },
    {
      item: "Learn piano",
      completed: false,
      id: 389298751212
    }
  ]
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: action.payload, completed: false, id: Date.now() }
        ]
      };

    case "TASK_COMPLETED":
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo;
        })
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};
