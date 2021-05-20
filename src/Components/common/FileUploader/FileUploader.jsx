import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faFolder } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";

const Container = styled("div")`
  position: relative;
  width: 45px;
  padding: 12px 16px;
  margin: 5px;
  display: inline-block;
  vertical-align: middle;
  background-color: ${props => (!props.disabled ? "DodgerBlue" : "grey")};

  color: white;

  &:hover {
    background-color: ${props => (!props.disabled ? "RoyalBlue" : "grey")};
  }

  svg {
    display: flex;
  }

  input {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    cursor: ${props => (!props.disabled ? "pointer" : "initial")};
  }
`;

const FileUploader = ({ onChange, disabled }) => (
  <Container disabled={disabled}>
    {!isMobile ? <FontAwesomeIcon icon={faFolder} /> : <FontAwesomeIcon icon={faCamera} />}

    <input
      type="file"
      name="file"
      onChange={onChange}
      accept=".png, .jpg, .jpeg"
      capture="camera" // opens directly the camera
      disabled={disabled}
    />
  </Container>
);
FileUploader.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default FileUploader;
