import React from "react";
import { render } from "../test-utils";
import App from "./App";

const initialState = {
  user: {
    isLoading: false,
    isCreated: false,
    isAuthenticated: false,
    user: {},
  },
  alert: {},
};
describe("App", () => {
  it("Renders without error", () => {
    render(<App />, initialState);
  });
});
