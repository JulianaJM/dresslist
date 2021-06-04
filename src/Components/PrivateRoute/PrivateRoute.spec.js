import React from "react";
import { render } from "../../../test-utils";
import PrivateRoute from "./PrivateRoute";

describe("PrivateRoute", () => {
  const TestComp = () => <div>HEllo world</div>;

  test("renders PrivateRoute component", () => {
    render(<PrivateRoute path="/test" component={TestComp} />);
  });
});
