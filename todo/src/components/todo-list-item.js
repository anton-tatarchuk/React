import React from "react";
import "./todo-list-item.css";

const TodoLostItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "#333",
  };
  return (
    <span className="todo-list-item" style={style}>
      {label}
    </span>
  );
};

export default TodoLostItem;
