import React, { useState, useRef } from "react";
import { MdEdit, MdDelete, MdSave } from "react-icons/md";
import { deleteTodo, updateTodo } from "../thunks";
import { Todo } from "../types";
import { useDispatch } from "react-redux";

const TodoItem = ({ content, id }: Todo) => {
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();
  const refItem = useRef<HTMLDivElement>(null);

  const toggleEditable = () => {
    setEditable(!editable);
  };

  const onDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const onUpdateTodo = () => {
    const value = refItem.current?.innerText || "";
    dispatch(updateTodo({ id, content: value }));
    toggleEditable();
  };

  return (
    <div className="todo-item">
      <div className="todo-content" contentEditable={editable} ref={refItem}>
        {content}
      </div>
      {!editable ? (
        <>
          <MdEdit onClick={toggleEditable} size="24" color="green" />
          <MdDelete size="24" color="red" onClick={onDeleteTodo} />
        </>
      ) : (
        <MdSave size="24" onClick={onUpdateTodo} />
      )}
    </div>
  );
};

export default TodoItem;
