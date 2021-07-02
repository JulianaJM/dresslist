import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Dresslist from "../../Components/Dresslist/Dresslist";
import { mq } from "../../utils/breakpoints";

const Container = styled("div")`
  ${mq({
    width: ["100%", "50%"],
    padding: ["30px 10px", "0"],
    margin: ["0", "0 auto"],
  })};
`;

const DressingList = () => (
  <Container>
    <h2>My dressing</h2>
    <Dresslist />
  </Container>
);

DressingList.propTypes = {};

export default DressingList;
