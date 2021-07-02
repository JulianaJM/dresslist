import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import HomePage from "./Pages/Home/Home";
import Login from "./Pages/Login/LoginContainer";
import Dressing from "./Pages/Dressing/DressingContainer";
import Header from "./Components/Header/HeaderContainer";
import { history } from "../store";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import DressingList from "./Pages/Dressing/DressingList";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/add" component={Dressing} />
            <PrivateRoute path="/list" component={DressingList} />
          </Switch>
        </ConnectedRouter>
      </>
    );
  }
}
// avoid reload state on dev change
export default hot(App);
