import React from "react";
import ReactDOM from "react-dom";
// polyfill features not available in older browsers (eg promise)
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from "./App";
import DefaultErrorBoundary from "./DefaultErrorBoundary";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <DefaultErrorBoundary> */}
    <App />
    {/* </DefaultErrorBoundary> */}
  </React.StrictMode>,
  document.getElementById("app")
);
