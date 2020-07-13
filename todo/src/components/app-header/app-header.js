import React from "react";
import "./app-header.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>My Todo List</h1>
      <h2>{toDo} items left, {done} done</h2>
    </div>
  );
};

export default AppHeader;
