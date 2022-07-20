import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./todos/Dashboard";
import { Provider } from "react-redux";
import store from "../store";
import Header from "./layout/Header";
import { Router, Route, Routes } from "react-router-dom";
import history from "../history";
import TodoDelete from "./todos/TodoDelete";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header /> // added
        <Dashboard />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
