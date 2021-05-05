import React from "react";
import { render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

describe("SignUpForm", () => {
  test("renders SignUpForm component", () => {
    render(<SignUpForm onSubmit={jest.fn()} />);
    expect(screen.getByText("Sign up")).toBeVisible();
  });
});
