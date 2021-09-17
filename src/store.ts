import { configureStore } from "@reduxjs/toolkit";
import todo from "features/Todo/slice";

const makeStore = () =>
  configureStore({
    reducer: {
      [todo.name]: todo.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV === "development",
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
