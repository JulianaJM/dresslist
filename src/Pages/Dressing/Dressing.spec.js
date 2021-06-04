import React from "react";
import { render, screen } from "@testing-library/react";
import Dressing from "./Dressing";

describe("Dressing", () => {
  test("renders Dressing component", () => {
    render(<Dressing createItem={jest.fn()} />);
    expect(screen.getByText(/Let's create an article/i)).toBeInTheDocument();
    expect(screen.getByText(/upload/i)).toBeInTheDocument();
    expect(screen.getByText(/type/i)).toBeInTheDocument();
    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
