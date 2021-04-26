import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Hanger from "../../assets/icons/Hanger";
import { mq } from "../../utils/breakpoints";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  color: #c92c7f;
  font-family: "Dancing Script", cursive;
  box-sizing: border-box;
`;

const Title = styled("p")`
  ${mq({
    position: ["absolute"],
    bottom: ["-12px", "-30px"],
    left: ["12px", "20px"],
    fontSize: ["0.9rem", "2rem"],
  })}
`;

const Logo = () => (
  <div
    css={css`
      ${mq({
        height: ["65px", "120px"],
      })}
    `}
  >
    <Wrapper>
      <Hanger
        css={css`
          ${mq({
            fill: ["#c92c7f"],
            stroke: ["#c92c7f"],
            width: ["100px", "200px"],
            height: ["35px", "80px"],
          })}
        `}
      />
      <Title>The Dressing</Title>
    </Wrapper>
  </div>
);

export default Logo;
