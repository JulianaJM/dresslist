import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo", () => {
  test("renders Logo component", () => {
    render(<Logo />);
    expect(screen.getByText("The Dressing")).toBeInTheDocument();
  });
});
