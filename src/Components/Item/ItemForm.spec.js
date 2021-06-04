import React from "react";
import { render, screen } from "@testing-library/react";

import ItemForm from "./ItemForm";

describe("ItemForm", () => {
  const onSubmit = jest.fn();

  test("renders ItemForm component", () => {
    render(<ItemForm onSubmit={onSubmit} />);
    expect(screen.getByText(/upload/i)).toBeInTheDocument();
    expect(screen.getByText(/type/i)).toBeInTheDocument();
    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
