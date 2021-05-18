import React from "react";
import { render, screen } from "@testing-library/react";
import AlertMessage from "./AlertMessage";

describe("AlertMessage", () => {
  test("renders AlertMessage component", () => {
    render(<AlertMessage message="message" type="success" />);
    expect(screen.getByText(/message/i)).toBeInTheDocument();
  });
});
