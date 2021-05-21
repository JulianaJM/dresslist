import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { mq } from "../../utils/breakpoints";
import Logo from "../common/Logo/Logo";

const Container = styled("div")`
  background: #191530;
  ${mq({
    padding: ["5px 0"],
  })};
`;

const Header = ({ isHomePage }) =>
  !isHomePage && (
    <Container>
      <Logo />
    </Container>
  );

Header.propTypes = {
  isHomePage: PropTypes.bool,
};
export default Header;
