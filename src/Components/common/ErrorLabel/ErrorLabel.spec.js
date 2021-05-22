import { render, screen } from "@testing-library/react";
import React from "react";
import ErrorLabel from "./ErrorLabel";

describe("ErrorLabel", () => {
  test("renders ErrorLabel component", () => {
    render(<ErrorLabel error="error" />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
