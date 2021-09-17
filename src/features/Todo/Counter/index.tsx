import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { increment, decrement } from "../slice";
import "./styles.css";

const Counter = () => {
  const counter = useSelector((state: AppState) => state.todo.counter);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="counter-wrapper">
      <button onClick={onDecrement}>-</button>
      <h2 className="counter">{counter}</h2>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
