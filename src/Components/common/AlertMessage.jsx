import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const colorTypes = {
  success: "#DFF2BF",
  error: "#FFBABA",
  info: "#BEF",
};

const MessageBox = styled("div")`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  line-height: 2.5;
  overflow: hidden;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  background: ${props => colorTypes[props.type]};
  height: 50px;
  width: 98%;
  margin: 5px auto;
  border-radius: 3px;
  animation: ${props => (props.animate ? "0.5s 3s forwards slideup" : "none")};

  @keyframes slideup {
    0% {
      top: 0;
    }
    100% {
      top: -60px;
    }
  }
`;

const AlertMessage = ({ message, type, animate = false }) => (
  <MessageBox type={type} animate={animate}>
    {message}
  </MessageBox>
);

AlertMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error", "info"]).isRequired,
  animate: PropTypes.bool,
};

export default AlertMessage;
