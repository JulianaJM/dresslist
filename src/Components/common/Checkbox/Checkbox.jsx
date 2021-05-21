import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const CheckboxEl = styled("span")`
  height: 25px;
  width: 25px;
  background-color: #eee;
  border: 1px solid #ccc;

  &:after {
    content: "";
    display: none;
  }

  &:after {
    position: absolute;
    left: 56px;
    top: 3px;
    width: 9px;
    height: 15px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const Input = styled("input")`
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:focus ~ span {
    outline: 1px dashed #ccc;
  }
`;

const Container = styled("label")`
  position: relative;
  font-size: 13px;
  font-weight: 100;
  display: flex;
  align-items: center;
  margin: 15px 0;

  label {
    color: #737373;
    pointer-events: none;
    padding: 0 5px;
  }

  &:hover input ~ span {
    background-color: #ccc;
  }

  input:checked ~ span {
    background-color: #2196f3;
  }

  input:checked ~ span:after {
    display: block;
  }
`;

const Checkbox = ({ id, label }) => (
  <Container htmlFor={id}>
    {label}
    <Input id={id} type="checkbox" />
    <CheckboxEl />
  </Container>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default Checkbox;
