import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import LoginForm from "../../Components/Login/LoginForm";
import SignUpForm from "../../Components/SignUp/SignUpForm";
import useToggle from "../../Hooks/useToggle";
import Button from "../../Components/commons/Button";
import { mq } from "../../utils/breakpoints";

const Wrapper = styled("div")`
  background: #fff;
  color: #191530;
  padding: 90px 10px 0 10px;
  ${mq({
    width: ["100%", "100%", "100%", "50%"],
  })}
  margin: 0 auto;
`;

const WrapperButton = styled.div`
  display: flex;
  align-items: baseline;
`;

const buttonCustom = css`
  width: auto;
  height: auto;
  background: none;
  &:hover {
    background: none;
  }
  text-decoration: underline;
  color: #191530;
  padding: 0 5px;
`;

const Title = styled("h3")`
  display: flex;
  ${mq({
    fontSize: ["1.5rem", "2.3rem"],
  })}
`;

const WrapperForm = styled.div`
  margin-top: 50px;
`;

const Span = styled.span`
  padding: 0 5px;
`;

const Login = ({ customStyles }) => {
  const [isOn, toggleIsOn] = useToggle();
  return (
    <Wrapper css={customStyles}>
      <WrapperButton>
        {!isOn ? <Title>Sign in</Title> : <Title>Sign up</Title>}
        <Span>or</Span>
        <Button type="button" onClick={toggleIsOn} customStyles={buttonCustom}>
          {!isOn ? "create an account" : "sign in to your account"}
        </Button>
      </WrapperButton>
      <WrapperForm>{!isOn ? <LoginForm /> : <SignUpForm />}</WrapperForm>
    </Wrapper>
  );
};

export default Login;
