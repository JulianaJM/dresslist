import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Logo from "../../Components/commons/Logo";
import { mq } from "../../utils/breakpoints";
import closet from "../../assets/images/closet.png";
import mannequin from "../../assets/images/mannequin.png";
import smartphoneGirl from "../../assets/images/smartphone-girl.png";
import photographer from "../../assets/images/photographer.png";
import Login from "../Login/Login";
import Modal from "../../Components/commons/Modal";
import Button from "../../Components/commons/Button";
import useToggle from "../../Hooks/useToggle";

const Section = styled("section")`
  ${mq({
    position: ["relative"],
  })}

  &:nth-of-type(1) {
    background: #191530;
  }
  &:nth-of-type(2) {
    background: #f1e6d7;
  }
  &:nth-of-type(3) {
    background: #f7faff;
  }
`;

const LogoWrapper = styled("div")`
  ${mq({
    width: ["100%"],
    fontFamily: ["Dela Gothic One, cursive"],
    fontSize: ["1.6rem", "1.6rem", "2.2rem", "4.4rem"],
    color: ["#c92c7f"],
    padding: ["5px 25px", "8px"],
  })}
  h1 {
    ${mq({ padding: ["10px 5px", "10px 5px", "20px 10px"], marginTop: ["30px"] })}
  }
`;

const Paragraph = styled("p")`
  ${mq({
    padding: ["10px 5px", "10px 5px", "15px 25px", "20px 8px"],
    fontSize: ["1.3rem", "2rem"],
    textAlign: ["center", "center", "left"],
    fontWeight: ["100"],
    color: ["#000"],
    marginTop: ["30px"],
    width: ["100%", "100%", "100%", "70%"],
  })}
`;

const H2 = styled("h2")`
  ${mq({
    fontSize: ["1.9rem", "3rem"],
    fontWeight: ["bold"],
    textAlign: ["center", "center", "left"],
    color: ["#c92c7f"],
    padding: ["25px 5px", "25px 5px", "35px 10px"],
  })}
`;

const HomePage = () => {
  const [isModalOn, toggleIsModalOn] = useToggle();
  return (
    <>
      <Section>
        <div
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              flex: 2;
            `}
          >
            <LogoWrapper>
              <Logo />
              <h1> Never forget your Clothes again</h1>
            </LogoWrapper>
          </div>

          <Login
            customStyles={css`
              flex: 1;
              border-bottom-left-radius: 5px;
              border-bottom-right-radius: 5px;
              ${mq({
                display: ["none", "none", "none", "block"],
              })}
            `}
          />
        </div>
        <Paragraph
          css={css`
            color: #fff;
          `}
        >
          The dressing is a space which offering you a large vision of your closet. Just take a
          picture of your clothes, add some informations, and it will be added in your dressing
          data.
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
                bottom: ["-30px", "-30px", "-30px", "-45px"],
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
          You can create all the combinations you want in a few clics. Just navigate in your
          dressing and choose what you want to wear today !
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

        <Button
          type="button"
          primary
          onClick={toggleIsModalOn}
          customStyles={css`
            ${mq({
              display: ["block", "block", "block", "none"],
            })}
            width: 70%;
            margin: 8px auto;
          `}
        >
          Register
        </Button>
        <Modal isOpen={isModalOn} onClose={toggleIsModalOn}>
          <Login />
        </Modal>
      </Section>
    </>
  );
};

export default HomePage;
