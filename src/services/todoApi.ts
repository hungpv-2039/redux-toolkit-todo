import { Todo } from "../features/Todo/types";
import { baseApi } from "./baseApi";

export const todoApi = baseApi.injectEndpoints({
  endpoints: (builds) => ({
    getAllTodos: builds.query<Todo[], undefined>({
      query: () => ({ url: "/todos" }),
    }),
  }),
});

export const { useGetAllTodosQuery } = todoApi;
