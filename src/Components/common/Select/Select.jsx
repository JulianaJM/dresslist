import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ErrorLabel from "../ErrorLabel/ErrorLabel";

const Container = styled("div")`
  position: relative;
  font-size: 13px;
  font-weight: 100;

  label {
    color: #737373;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 50%;
    margin-top: -8px;
    transition: all 0.2s ease;
    font-weight: 100;
    font-size: 13px;
    margin-bottom: 5px;
  }

  &:after {
    position: absolute;
    right: 4px;
    bottom: 10px;
    /* Styling the down arrow */
    width: 0;
    height: 0;
    padding: 0;
    content: "";
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.12);
    pointer-events: none;
  }

  select {
    appearance: none;
    position: relative;
    font-family: inherit;
    background-color: transparent;
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 26px;
    padding-bottom: 10px;
    border: none;
    border-bottom: ${props => (props.error ? "1px solid #e01518 " : "1px solid #ccc")};

    &:focus {
      outline: 1px dashed #ccc;
    }

    &:focus ~ label,
    &:valid ~ label {
      top: 15px;
      color: #777;
    }
  }
`;

const Select = ({ id, label, value, options, error, onChange }) => {
  const noop = () => {};
  return (
    <>
      <Container error={error}>
        <select id={id} value={value} onBlur={noop} onChange={onChange}>
          <option id="-1" value="" />
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.name}
            </option>
          ))}
        </select>
        <label
          htmlFor={id}
          css={
            !value &&
            css`
              left: 5px;
              top: 50% !important;
              margin-top: -8px;
            `
          }
        >
          {label}
        </label>
      </Container>
      {error && <ErrorLabel error={error} />}
    </>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Select;
