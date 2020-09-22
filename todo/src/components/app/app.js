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
      this.createTodoItem("Drink Coffe"),
      this.createTodoItem("Make React App"),
      this.createTodoItem("Get The shit Done"),
      this.createTodoItem("Drink Beer"),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
      visible: true,
    };
  }

  toggleProperty(arr, id, propName, filter) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    let newItem;
    if (filter === "show") {
      newItem = { ...oldItem, [propName]: true };
    } 
    else if (filter === "hide") {
      newItem = { ...oldItem, [propName]: false };
    }
    else {
      newItem = { ...oldItem, [propName]: !oldItem[propName] };
    }

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

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
    const newItem = this.createTodoItem(text);

    //add element in array
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important"),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  filterAction = (showItems, hideItems) => {
    showItems.map((e) => {
      return this.setState(({ todoData }) => {
        return {
          todoData: this.toggleProperty(todoData, e.id, "visible", "show"),
        };
      });
    });
    if (hideItems) {
      hideItems.map((e) => {
        return this.setState(({ todoData }) => {
          return {
            todoData: this.toggleProperty(todoData, e.id, "visible", "hide"),
          };
        });
      });
    }
  };

  onFilterItems = (filter) => {
    const undoneItems = this.state.todoData.filter((el) => el.done === false);
    const doneItems = this.state.todoData.filter((el) => el.done === true);

    switch (filter) {
      case "done":
        this.filterAction(doneItems, undoneItems);
        break;
      case "active":
        this.filterAction(undoneItems, doneItems);
        break;
      default:
        this.filterAction(this.state.todoData);
        break;
    }
  };

  searchItems = (term) => {
    if (term.length) {
      term = term.toLowerCase();

      const undoneItems = this.state.todoData.filter((el) => !el.label.toLowerCase().includes(term));
      const doneItems = this.state.todoData.filter((el) => el.label.toLowerCase().includes(term));
      
      this.filterAction(doneItems, undoneItems);
    } else {
      this.filterAction(this.state.todoData);
    }
  }

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel searchItems={this.searchItems}/>
          <ItemStatusFilter onFilterItems={this.onFilterItems} />
        </div>
        <TodoList
          todos={todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddItem onAddItem={this.addItem} />
      </div>
    );
  }
}
