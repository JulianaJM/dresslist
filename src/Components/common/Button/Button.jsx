import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const hasCustumStyles = props => props.styles;

const ButtonEl = styled("button")`
  background-color: ${props => (props.primary ? "#373382" : "lightgrey")};
  &:hover {
    background-color: ${props => (props.primary ? "#191540" : "grey")};
  }
  &:disabled {
    background-color: #cccccc;
    cursor: initial;
  }
  &:focus {
    outline: 1px dashed #c92c7f;
  }
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  padding: 13px 40px;
  border-radius: 3px;
  border: none;
  width: 100%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  ${hasCustumStyles};
`;

const Button = ({ type, children, primary, onClick, disabled, customStyles }) => (
  <ButtonEl
    primary={primary}
    type={type}
    onClick={onClick}
    styles={customStyles}
    disabled={disabled}
  >
    {children}
  </ButtonEl>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  customStyles: PropTypes.object,
};
export default Button;
