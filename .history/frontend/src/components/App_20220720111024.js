import React, { Component } from "react";
import ReactDOM from "react-dom";
import Dashboard from "./todos/Dashboard";
import { Provider } from "react-redux";
import store from "../store";
import Header from "./layout/Header";
import { Router, Route, Switch } from "react-router-dom"; 
import history from "../history"; 
import TodoDelete from "./todos/TodoDelete"; 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/delete/:id" component={TodoDelete} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
