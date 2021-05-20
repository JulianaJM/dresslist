import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ButtonEl = styled("button")`
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: RoyalBlue;
  }
`;

const ButtonIcon = ({ children, onClick, disabled }) => (
  <ButtonEl type="button" onClick={onClick} disabled={disabled}>
    {children}
  </ButtonEl>
);

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
export default ButtonIcon;
