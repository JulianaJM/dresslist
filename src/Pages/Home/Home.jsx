import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import Logo from "../../Components/common/Logo/Logo";
import { mq } from "../../utils/breakpoints";
import closet from "../../assets/images/closet.png";
import mannequin from "../../assets/images/mannequin.png";
import smartphoneGirl from "../../assets/images/smartphone-girl.png";
import photographer from "../../assets/images/photographer.png";
import Login from "../Login/LoginContainer";
import Modal from "../../Components/common/Modal/Modal";
import Button from "../../Components/common/Button/Button";
import useToggle from "../../Hooks/useToggle";
import Title from "../../Components/common/Title/Title";
import { isAuthenticated } from "../../services/authenticationService";

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
  flex: 2;
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
  color: ${props => (props.color ? props.color : "#000")};
  ${mq({
    padding: ["10px 5px", "10px 5px", "15px 25px", "20px 8px"],
    fontSize: ["1.3rem", "2rem"],
    textAlign: ["center", "center", "left"],
    fontWeight: ["100"],
    marginTop: ["30px"],
    width: ["100%", "100%", "100%", "65%"],
  })}
`;

const customTitleSection2 = css`
  ${mq({
    textAlign: ["center", "center", "left"],
  })}
`;

const customTitleSection3 = css`
  ${mq({
    textAlign: ["center", "center", "right"],
    padding: ["25px 5px", "25px 5px", "35px 95px 35px 0px"],
  })}
`;

const LoginContainer = styled.div`
  display: flex;
`;

const customLogin = css`
  flex: 1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  right: -50%;
  ${mq({
    display: ["none", "none", "none", "block"],
  })}
  animation: slide 0.5s forwards;
  animation-delay: 0.1s;
  @keyframes slide {
    100% {
      right: 0;
    }
  }
`;

const Section1Image = styled.div`
  ${mq({
    display: ["block", "flex"],
  })}
`;

const imgCloset = css`
  ${mq({
    display: ["block"],
    margin: ["0 auto", "5px"],
    width: ["75%", "50%"],
    height: ["170px", "50%"],
  })}
`;

const imgPhotographer = css`
  ${mq({
    width: ["100%", "55%"],
    position: ["relative", "absolute"],
    bottom: ["-30px", "-30px", "-30px", "-45px"],
    right: ["initial", "0"],
    zIndex: [1],
  })}
`;

const imgMannequin = css`
  ${mq({
    margin: ["60px 0 0 0", "0 auto"],
    width: ["100%", "40%"],
    display: ["block"],
  })}
`;

const imgSmartphoneGirl = css`
  ${mq({
    margin: ["60px 0 0 0", "0 auto"],
    width: ["100%", "40%"],
    display: ["block"],
  })}
`;

const registerButton = css`
  ${mq({
    display: ["block", "block", "block", "none"],
  })}
  width: 70%;
  margin: 8px auto;
`;

const HomePage = () => {
  const [isModalOn, toggleIsModalOn] = useToggle();

  return (
    <>
      <Section>
        <LoginContainer>
          <LogoWrapper>
            <Logo isBig />
            <h1> Never forget your Clothes again</h1>
          </LogoWrapper>
          {!isAuthenticated() && <Login customStyles={customLogin} />}
        </LoginContainer>

        <Paragraph color="#fff">
          The dressing is a space which offering you a large vision of your closet. Just take a
          picture of your clothes, add some informations, and it will be added in your dressing
          data.
        </Paragraph>
        <Section1Image>
          <img src={closet} alt="" css={imgCloset} />
          <img src={photographer} alt="" css={imgPhotographer} />
        </Section1Image>
      </Section>
      <Section>
        <Title customStyles={customTitleSection2}>Combination of clothes</Title>
        <Paragraph>
          You can create all the combinations you want in a few clics. Just navigate in your
          dressing and choose what you want to wear today !
        </Paragraph>
        <img src={mannequin} alt="" css={imgMannequin} />
      </Section>
      <Section>
        <Title customStyles={customTitleSection3}>Ask your friends</Title>
        <Paragraph>
          You don't know what to wear or you can't choose ? Make your combination and share it with
          your friends or your family.
        </Paragraph>
        <img src={smartphoneGirl} alt="" css={imgSmartphoneGirl} />

        {!isAuthenticated() && (
          <>
            <Button type="button" primary onClick={toggleIsModalOn} customStyles={registerButton}>
              Register
            </Button>
            <Modal isOpen={isModalOn} onClose={toggleIsModalOn}>
              <Login />
            </Modal>
          </>
        )}
      </Section>
    </>
  );
};

export default HomePage;
