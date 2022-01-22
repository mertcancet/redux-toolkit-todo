import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = { id: v4(), name: action.payload, completed: false };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    completed: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = true;
    },
    notCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = false;
    },
  },
});

export const { add, deleteTodo, completed, notCompleted } = todoSlice.actions;

export default todoSlice.reducer;
