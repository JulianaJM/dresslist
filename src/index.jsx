/* eslint-disable import/no-extraneous-dependencies */
// polyfill features not available in older browsers (eg promise)
import "core-js/stable";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "regenerator-runtime/runtime";
import store from "../store";
import App from "./App";
import DefaultErrorBoundary from "./DefaultErrorBoundary";
import "./style.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <DefaultErrorBoundary>
        <App />
      </DefaultErrorBoundary>
    </React.StrictMode>
  </Provider>,
  document.getElementById("app")
);
