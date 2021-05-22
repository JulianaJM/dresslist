import React from "react";
import { render } from "@testing-library/react";
import Select from "./Select";

describe("Select", () => {
  const onChange = jest.fn();
  test("renders Select component", () => {
    render(<Select id="select" label="select" value="select" options={[]} onChange={onChange} />);
  });
});
