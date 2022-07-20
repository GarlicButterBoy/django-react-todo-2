import React, { Component } from "react";
import TodoList from "./TodoList";
9k-0

class Dashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <div>Todo Create Form</div>
        <TodoCreate /> 
        <TodoList />
      </div>
    );
  }
}

export default Dashboard;

