export const initialState = [
  {
    item: "Learn Reduce",
    completed: false,
    id: 3892987589
  },
  {
    item: "Learn piano",
    completed: false,
    id: 3892987589
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() }
      ];

    case "COMPLETED_TASK":
      return state.map(item => {
        return item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item;
      });

    case "CLEAR_COMPLETED":
      return state.filter(item => !item.completed);
    default:
      return state;
  }
};

// export const todoReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       const newTodo = { ...action.payload, due: moment(action.payload.due), id: Date.now(), completed: false };
//       return [...state, newTodo];
//     case "TOGGLE_COMPLETED":
//       return state.map(item => {
//         return item.id === action.payload ? { ...item, completed: !item.completed, dateCompleted: moment() } : item;
//       });
// case "CLEAR_COMPLETED":
//   return state.filter(item => !item.completed);
// default:
//   return state;
//   }
// }

/* export const titleReducer = (state, action) => {
  // action needs a .type //
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "TOGGLE_EDITING":
      return { ...state, editing: !state.editing };
    default:
      return state;
  } */
