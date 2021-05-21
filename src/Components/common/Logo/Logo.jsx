import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Hanger from "../../../assets/icons/Hanger";
import { mq } from "../../../utils/breakpoints";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  color: #c92c7f;
  font-family: "Dancing Script", cursive;
  box-sizing: border-box;
`;

const hanger = css`
  ${mq({
    fill: ["#c92c7f"],
    stroke: ["#c92c7f"],
    width: ["100px"],
    height: ["35px"],
  })}
`;

const hangerBig = css`
  ${mq({
    fill: ["#c92c7f"],
    stroke: ["#c92c7f"],
    width: ["100px", "200px"],
    height: ["35px", "80px"],
  })}
`;

const Title = styled("p")`
  ${mq({
    marginLeft: ["12px"],
    fontSize: ["1.2rem", "1.5rem"],
  })}
`;

const TitleBig = styled("p")`
  ${mq({
    position: ["absolute"],
    bottom: ["-12px", "-30px"],
    left: ["12px", "20px"],
    fontSize: ["1.1rem", "2rem"],
  })}
`;

const Logo = ({ isBig = false }) => {
  const title = "The Dressing";
  return (
    <Wrapper>
      <Hanger css={isBig ? hangerBig : hanger} />
      {isBig ? <TitleBig>{title}</TitleBig> : <Title>{title}</Title>}
    </Wrapper>
  );
};

Logo.propTypes = {
  isBig: PropTypes.bool,
};

export default Logo;
