import React, { Component } from "react";
import ReactDOM from "react-dom";

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
