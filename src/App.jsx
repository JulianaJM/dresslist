import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import SignUpForm from "./Components/SignUp/SignUpForm";

class App extends Component {
  render() {
    return (
      <>
        {/* <LoginForm /> */}
        <SignUpForm />

        {/* <Dresslist /> */}
      </>
    );
  }
}
// avoid reload state on dev change
export default hot(App);
