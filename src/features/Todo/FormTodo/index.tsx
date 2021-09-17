import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../thunks";

const FormTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  return (
    <form className="frm-todo" onSubmit={onSubmit}>
      <input placeholder="New task" value={value} onChange={onChange} />
    </form>
  );
};

export default FormTodo;
