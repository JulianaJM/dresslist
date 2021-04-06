import React from "react";
import styled from "@emotion/styled";

const ButtonEl = styled("button")`
  background-color: #fc5b30;
  background-color: ${props => (props.primary ? "#fc5b30" : "lightgrey")};
  &:hover {
    background-color: ${props => (props.primary ? "#f53704" : "grey")};
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
`;

const Button = ({ type, children, primary }) => {
  return (
    <ButtonEl primary={primary} type={type}>
      {children}
    </ButtonEl>
  );
};

export default Button;
