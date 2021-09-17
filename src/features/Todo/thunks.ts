import { Todo } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import todoServices from "services/todo";
import { setAlert } from "./slice";

export const fetchTodoList = createAsyncThunk<Todo[], undefined>(
  "todo/fetchListTodo",
  async (_, thunkApi) => {
    try {
      const { data } = await todoServices.fetchTodoList();
      console.log({ data });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addTodo = createAsyncThunk<Todo, string>(
  "todo/addTodo",
  async (content, thunkApi) => {
    try {
      const { data } = await todoServices.addTodo({ content });
      thunkApi.dispatch(
        setAlert({ content: "Add todo success !", status: "success" })
      );
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteTodo = createAsyncThunk<{ id: string }, string>(
  "todo/deleteTodo",
  async (id, thunkApi) => {
    try {
      await todoServices.deleteTodo({ id });
      thunkApi.dispatch(
        setAlert({ content: "Delete todo success !", status: "success" })
      );
      return { id };
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const updateTodo = createAsyncThunk<
  Todo,
  { content: string; id: string }
>("todo/updateTodo", async ({ content, id }, thunkApi) => {
  try {
    const { data } = await todoServices.updateTodo({ content, id });
    thunkApi.dispatch(
      setAlert({ content: "Update todo success !", status: "success" })
    );
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
