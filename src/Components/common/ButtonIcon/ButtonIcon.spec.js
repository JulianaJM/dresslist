import React from "react";
import { render, screen } from "@testing-library/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "./ButtonIcon";

describe("ButtonIcon", () => {
  test("renders ButtonIcon component", () => {
    render(
      <ButtonIcon type="button">
        <FontAwesomeIcon icon={faTimesCircle} data-testid="icon" />
      </ButtonIcon>
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
