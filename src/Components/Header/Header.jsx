import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { mq } from "../../utils/breakpoints";
import Logo from "../common/Logo/Logo";

const Container = styled("div")`
  background: #191530;
  width: 100%;
  z-index: 99;
  display: flex;
  color: #fff;
  ${mq({
    padding: ["5px 0"],
  })};
  transition: height 0.6s, linear;
`;

const Nav = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Header = ({ isHomePage }) => {
  const headerEl = useRef();
  const sentinalEl = useRef();

  useEffect(() => {
    const handler = entries => {
      // entries is an array of observed dom nodes
      // we're only interested in the first one at [0]
      // because that's our .sentinal node.
      // Here observe whether or not that node is in the viewport
      if (!entries[0].isIntersecting) {
        headerEl.current.classList.add("sticky");
      } else {
        headerEl.current.classList.remove("sticky");
      }
    };
    // create the observer
    const observer = new window.IntersectionObserver(handler);
    // give the observer some dom nodes to keep an eye on
    observer.observe(sentinalEl.current);
  }, []);

  return (
    !isHomePage && (
      <>
        <div ref={sentinalEl} />
        <Container ref={headerEl}>
          <Logo />
          <Nav>
            <li>home</li>
            <li>add</li>
            <li>list</li>
          </Nav>
        </Container>
      </>
    )
  );
};

Header.propTypes = {
  isHomePage: PropTypes.bool,
};
export default Header;
