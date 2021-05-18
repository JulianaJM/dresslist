import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  test("renders Modal component", () => {
    render(
      <Modal isOpen onClose={jest.fn()}>
        <p>text</p>
      </Modal>
    );
    expect(screen.getByText("text")).toBeInTheDocument();
  });
});
