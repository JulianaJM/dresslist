import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ButtonEl = styled("button")`
  background: ${props => (props.background ? "DodgerBlue" : "none")};
  border: none;
  color: ${props => (props.background ? "white" : "black")};
  padding: ${props => (props.background ? "12px 16px" : "0")};
  cursor: pointer;
  width: 0;

  &:hover {
    background: ${props => (props.background ? "RoyalBlue" : "none")};
  }
`;

const ButtonIcon = ({ children, onClick, disabled, title, background = false }) => (
  <ButtonEl
    type="button"
    onClick={onClick}
    disabled={disabled}
    background={background}
    title={title}
  >
    {children}
  </ButtonEl>
);

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  background: PropTypes.bool,
  title: PropTypes.string,
};
export default ButtonIcon;
