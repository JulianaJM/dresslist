import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Dresslist from './Components/Dresslist/Dresslist';

class App extends Component {
  state = {
    count: 0,
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <Dresslist />
      </>
    );
  }
}
// avoid reload state on dev change
// const hotFunction = hot(module);
// export default hotFunction(App);
export default hot(module)(App);
