import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Container = styled.p`
  margin: 10px 0;
  color: #e01518;
`;

const ErrorLabel = ({ error }) => <Container>{error}</Container>;

ErrorLabel.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorLabel;
