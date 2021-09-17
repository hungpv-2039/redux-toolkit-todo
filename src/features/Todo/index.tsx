import React, { useEffect } from "react";
import { fetchTodoList } from "./thunks";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "store";
import { Todo } from "./types";
import FormTodo from "./FormTodo";
import TodoItem from "./TodoItem";
import Counter from "./Counter";
import "./styles.css";

const TodoPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: AppState) => state.todo.todos);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <div className="todo-wrapper">
      <Counter />
      <h2>Todo example with RTK</h2>
      <FormTodo />
      <div className="todo-list">
        {(todos || []).map((it: Todo) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
