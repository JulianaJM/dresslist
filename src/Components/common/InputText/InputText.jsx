import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import ErrorLabel from "../ErrorLabel/ErrorLabel";

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  font-size: 13px;
  font-weight: 100;
`;

const Input = styled("input")`
  color: #333;
  width: 100%;
  border: none;
  border-bottom: ${props => (props.error ? "1px solid #e01518 " : "1px solid #ccc")};
  border-radius: 0;
  display: block;
  background: transparent;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 26px;
  padding-bottom: 10px;
  outline: none;
  &:focus ~ label {
    top: 15px;
    color: #777;
  }
`;

const isLabelMiddle = props =>
  props.isMiddle &&
  css`
    top: 15px;
    color: #777;
  `;

const Label = styled("label")`
  color: #737373;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 50%;
  margin-top: -8px;
  transition: all 0.2s ease;
  margin-bottom: 5px;
  ${isLabelMiddle};
`;

const InputText = ({ label, type, id, name, value, error, onChange }) => (
  <>
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <InputWrapper>
      <Input type={type} id={id} name={name} value={value} error={error} onChange={onChange} />
      <Label htmlFor={id} isMiddle={value}>
        {label}
      </Label>
    </InputWrapper>
    {error && <ErrorLabel error={error} />}
  </>
);

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
