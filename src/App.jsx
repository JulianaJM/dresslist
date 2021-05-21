import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import Login from "./Pages/Login/LoginContainer";
import Dressing from "./Pages/Dressing/Dressing";
import Header from "./Components/Header/HeaderContainer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/dressing" component={Dressing} />
          </Switch>
        </Router>
      </>
    );
  }
}
// avoid reload state on dev change
export default hot(App);
