import React from "react";
import { render } from "@testing-library/react";

import ArticleForm from "./ArticleForm";

describe("ArticleForm", () => {
  const onSubmit = jest.fn();

  test("renders ArticleForm component", () => {
    render(<ArticleForm onSubmit={onSubmit} />);
  });
});
