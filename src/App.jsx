import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import Login from "./Pages/Login/LoginContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}
// avoid reload state on dev change
export default hot(App);
