import React from "react";
import { render } from "@testing-library/react";
import InputText from "./InputText";

describe("InputText", () => {
  const onChange = jest.fn();
  test("renders InputText component", () => {
    render(<InputText id="id" name="name" type="text" onChange={onChange} />);
  });
});
