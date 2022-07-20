import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./todos/Dashboard"; // added
import { Provider } from "react-redux"; // added
import store from "../store"; // added

class App extends Component {
  render() {
    return (
      <div>
        <h1>ToDoCRUD</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
