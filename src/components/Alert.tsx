import { setAlert } from "features/Todo/slice";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "store";
import "./styles.css";

const Alert = () => {
  const alert = useSelector((state: AppState) => state.todo.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    if (alert.content) {
      const timeRef = setTimeout(() => {
        dispatch(setAlert({ content: "", status: "success" }));
      }, 700);
      return () => clearTimeout(timeRef);
    }
  }, [alert.content, dispatch]);

  if (!alert.content) return null;

  return (
    <div className={`alert-wrapper ${alert.status === "error" ? "error" : ""}`}>
      {alert.content}
    </div>
  );
};

export default Alert;
