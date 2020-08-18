import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";

import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: "Drink Coffe", important: false, id: 1 },
      { label: "Make React App", important: true, id: 2 },
      { label: "Get The shit Done", important: false, id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArr,
      };
    });
  };
  addItem = (text) => {
    // generate id
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };

    //add element in array
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });

    console.log("added", text);
  };

  onToggleImportant = (id) => {
    console.log("Toggle Imp", id);
  };
  onToggleDone = (id) => {
    console.log("Toggle Done", id);
  };
  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList 
          todos={this.state.todoData} 
          onDeleted={this.deleteItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}          
          />
        <AddItem onAddItem={this.addItem} />
      </div>
    );
  }
}
