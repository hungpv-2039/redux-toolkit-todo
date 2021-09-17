import { Todo, State, Alert } from "./types";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { fetchTodoList, addTodo, deleteTodo, updateTodo } from "./thunks";

const initialState: State = {
  loading: false,
  todos: [],
  alert: { status: "success", content: "" },
  counter: 0,
  errors: {},
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    setAlert: (state, { payload }: PayloadAction<Alert>) => {
      state.alert = payload;
    },
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchTodoList.fulfilled,
        (state, { payload }: PayloadAction<Todo[]>) => {
          console.log(current(state));
          state.todos = payload;
        }
      )
      .addCase(fetchTodoList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodoList.rejected, (state) => {
        state.loading = false;
      })
      .addCase(
        addTodo.fulfilled,
        (state, { payload }: PayloadAction<Todo>) =>
          void state.todos.push(payload)
      )
      .addCase(
        deleteTodo.fulfilled,
        (state, { payload }: PayloadAction<{ id: string }>) => {
          state.todos = state.todos.filter((it: Todo) => it.id !== payload.id);
        }
      )
      .addCase(
        updateTodo.fulfilled,
        (state, { payload }: PayloadAction<Todo>) => {
          state.todos = state.todos.map((it: Todo) =>
            it.id === payload.id ? payload : it
          );
        }
      );
  },
});

const { actions } = todoSlice;

export const { setAlert, increment, decrement } = actions;

export default todoSlice;
