import React, { Component } from "react";
import { hot } from "react-hot-loader";
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
// const hotFunction = hot(module);
// export default hotFunction(App);
export default hot(module)(App);
