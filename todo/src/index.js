import React from "react";
import ReactDOM from "react-dom";

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list'

const App = () => {
  const todoData = [
    {label: 'Drink Coffe', important: false},
    {label: 'Make React App', important: true},
    {label: 'Get The shit Done', important: false}
  ]
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));