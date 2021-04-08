import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import HomePage from "./Pages/Home/Home";

class App extends Component {
  render() {
    return (
      <>
        <HomePage />

        {/* <Dresslist /> */}
      </>
    );
  }
}
// avoid reload state on dev change
export default hot(App);
