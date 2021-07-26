import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { mq } from "../../utils/breakpoints";
import Logo from "../common/Logo/Logo";
import { isAuthenticated } from "../../services/authenticationService";

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

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Header = ({ hasDresslist }) => {
  const headerEl = useRef();
  const sentinalEl = useRef();

  useEffect(() => {
    if (!isAuthenticated()) {
      return;
    }
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

    return () => observer.unobserve(sentinalEl.current);
  }, []);

  return (
    isAuthenticated() && (
      <>
        <div ref={sentinalEl} />
        <Container ref={headerEl}>
          <Logo />
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/add">Create</Link>
            {hasDresslist && <Link to="/list">List</Link>}
          </Nav>
        </Container>
      </>
    )
  );
};

Header.propTypes = {
  hasDresslist: PropTypes.bool,
};
export default Header;
