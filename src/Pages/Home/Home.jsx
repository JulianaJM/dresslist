import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Logo from "../../Components/commons/Logo";
import { mq } from "../../utils/breakpoints";
import closet from "../../assets/images/closet.png";
import mannequin from "../../assets/images/mannequin.png";
import smartphoneGirl from "../../assets/images/smartphone-girl.png";
import photographer from "../../assets/images/photographer.png";

const Section = styled("section")`
  ${mq({
    position: ["relative"],
  })}

  &:nth-child(1) {
    background: #191530;
    & > p {
      color: #fff;
    }
  }
  &:nth-child(2) {
    background: #f1e6d7;
  }
  &:nth-child(3) {
    background: #f7faff;
  }
`;

const LogoWrapper = styled("div")`
  ${mq({
    width: ["100%", "100%", "70%"],
    fontFamily: ["Dela Gothic One, cursive"],
    fontSize: ["1.6rem", "4.4rem"],
    color: ["#c92c7f"],
    padding: ["5px 25px", "8px"],
  })}
  h1 {
    ${mq({ padding: ["10px 5px", "10px 5px", "20px 8px"], marginTop: ["30px"] })}
  }
`;

const Paragraph = styled("p")`
  ${mq({
    padding: ["10px 5px", "10px 5px", "20px 8px"],
    fontFamily: ["Lato, sans-serif"],
    fontSize: ["1.3rem", "2rem"],
    textAlign: ["center", "center", "left"],
    fontWeight: ["100"],
    color: ["#000"],
    marginTop: ["30px"],
    width: ["100%", "60%"],
  })}
`;

const H2 = styled("h2")`
  ${mq({
    fontFamily: ["Lato, sans-serif"],
    fontSize: ["1.9rem", "3rem"],
    fontWeight: ["bold"],
    textAlign: ["center", "center", "left"],
    color: ["#c92c7f"],
    padding: ["25px 5px", "25px 5px", "35px 8px"],
  })}
`;
const HomePage = () => (
  <>
    <Section>
      <LogoWrapper>
        <Logo />
        <h1> Never forget your Clothes again</h1>
      </LogoWrapper>
      <Paragraph>
        The dressing is a space which offering you a large vision of your closet. Just take a
        picture of your clothes, add some informations, and it will be added in your dressing data.
      </Paragraph>
      <div
        css={css`
          ${mq({
            display: ["block", "flex"],
          })}
        `}
      >
        <img
          src={closet}
          alt=""
          css={css`
            ${mq({
              display: ["block"],
              margin: ["0 auto", "5px"],
              width: ["75%", "50%"],
              height: ["170px", "auto"],
            })}
          `}
        />
        <img
          src={photographer}
          alt=""
          css={css`
            ${mq({
              width: ["100%", "55%"],
              position: ["relative", "absolute"],
              bottom: ["-30px", "-45px"],
              right: ["initial", "0"],
              zIndex: [1],
            })}
          `}
        />
      </div>
    </Section>
    <Section>
      <H2>Combination of clothes</H2>
      <Paragraph>
        You can create all the combinations you want in a few clics. Just navigate in your dressing
        and choose what you want to wear today !
      </Paragraph>
      <img
        src={mannequin}
        alt=""
        css={css`
          ${mq({
            margin: ["60px 0 0 0", "0 auto"],
            width: ["100%", "40%"],
            display: ["block"],
          })}
        `}
      />
    </Section>
    <Section>
      <H2
        css={css`
          ${mq({
            textAlign: ["center", "center", "right"],
            padding: ["25px 5px", "25px 5px", "35px 95px 35px 0px"],
          })}
        `}
      >
        Ask your friends
      </H2>
      <Paragraph>
        You don't know what to wear or you can't choose ? Make your combination and share it with
        your friends or your family.
      </Paragraph>
      <img
        src={smartphoneGirl}
        alt=""
        css={css`
          ${mq({
            margin: ["60px 0 0 0", "0 auto"],
            width: ["100%", "40%"],
            display: ["block"],
          })}
        `}
      />
    </Section>
  </>
);

export default HomePage;
