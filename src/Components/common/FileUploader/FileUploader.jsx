import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faFolder } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";

const Icon = styled("div")`
  padding: 12px 16px;
  margin: 5px;
  display: inline-block;
  vertical-align: middle;
  background-color: ${props => (!props.disabled ? "#eee" : "grey")};
  color: #333;

  &:hover {
    background-color: ${props => (!props.disabled ? "#ccc" : "grey")};
  }

  svg {
    display: flex;
  }
`;

const Input = styled("input")`
  position: absolute;
  top: 12px;
  left: -85px;
  opacity: 0;
  cursor: ${props => (!props.disabled ? "pointer" : "initial")};

  &:focus ~ div {
    outline: 1px dashed #ccc;
  }
`;

const Container = styled("div")`
  position: relative;
  width: 45px;
`;

const FileUploader = ({ onChange, disabled }) => (
  <Container>
    <Input
      type="file"
      name="file"
      onChange={onChange}
      accept=".png, .jpg, .jpeg"
      capture="camera" // opens directly the camera
      disabled={disabled}
    />
    <Icon disabled={disabled}>
      {!isMobile ? <FontAwesomeIcon icon={faFolder} /> : <FontAwesomeIcon icon={faCamera} />}
    </Icon>
  </Container>
);
FileUploader.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default FileUploader;
