import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { mq } from "../../../utils/breakpoints";

const H2 = styled("h2")`
  ${mq({
    fontSize: ["1.9rem", "3rem"],
    fontWeight: ["bold"],
    textAlign: ["center"],
    color: ["#c92c7f"],
    padding: ["25px 5px", "25px 5px", "35px 10px"],
  })}
`;

const Title = ({ children, customStyles }) => <H2 css={customStyles}>{children}</H2>;

Title.propTypes = {
  children: PropTypes.node,
  customStyles: PropTypes.object,
};

export default Title;
