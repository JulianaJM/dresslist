import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders Button component", () => {
    render(<Button type="button">button</Button>);
    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });
});
