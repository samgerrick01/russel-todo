import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      return { ...state, todos: [...state.todos, action.payload] };
    },
    updateTodo(state, action) {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              name: action.payload.name,
            };
          }
          return todo;
        }),
      };
    },
  },
});

export const { addTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
