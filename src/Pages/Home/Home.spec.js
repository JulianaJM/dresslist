import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import Home from "./Home";

describe("Home", () => {
  test("renders Home component", () => {
    render(<Home />);

    expect(screen.getByText(/Never forget your Clothes again/i)).toBeInTheDocument();
  });
});
