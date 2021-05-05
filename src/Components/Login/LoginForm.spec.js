import React from "react";
import { render, screen } from "@testing-library/react";

import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  const onSubmit = jest.fn();

  test("renders LoginForm component", () => {
    render(<LoginForm onSubmit={onSubmit} />);
    expect(screen.getByText("Sign in")).toBeVisible();
  });
});
