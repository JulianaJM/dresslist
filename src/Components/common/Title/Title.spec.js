import { render, screen } from "@testing-library/react";
import React from "react";
import Title from "./Title";

describe("Title", () => {
  test("renders Title component", () => {
    render(<Title>title</Title>);
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});
