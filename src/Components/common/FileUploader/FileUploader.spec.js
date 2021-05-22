import { render, screen } from "@testing-library/react";
import React from "react";
import FileUploader from "./FileUploader";

describe("FileUploader", () => {
  test("renders FileUploader component", () => {
    render(<FileUploader />);
    expect(screen.getByTestId("file")).toBeInTheDocument();
  });
});
