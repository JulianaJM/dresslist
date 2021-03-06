import { render, screen } from "@testing-library/react";
import React from "react";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  test("renders Checkbox component", () => {
    render(<Checkbox id="checkbox" label="checkbox" onChange={jest.fn()} />);
    expect(screen.getByText(/checkbox/i)).toBeInTheDocument();
  });
});
