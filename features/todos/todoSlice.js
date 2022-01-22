import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = { id: v4(), name: action.payload };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
