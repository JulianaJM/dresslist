import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import LoginForm from "../../Components/Login/LoginForm";
import SignUpForm from "../../Components/SignUp/SignUpForm";
import useToggle from "../../Hooks/useToggle";
import Button from "../../Components/common/Button";
import { mq } from "../../utils/breakpoints";
import AlertMessage from "../../Components/common/AlertMessage";

const Wrapper = styled("div")`
  position: ${props => (props.isRelative ? "relative" : "initial")};
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

const Login = ({ register, login, isLoading, customStyles, alert, isCreated, isHomePage }) => {
  const [isOn, toggleIsOn] = useToggle();
  const history = useHistory();

  useEffect(() => {
    if (isCreated) {
      if (!isHomePage) {
        toggleIsOn();
      } else {
        history.push("/login");
      }
    }
  }, [isCreated, isHomePage, toggleIsOn, history]);

  return (
    <>
      <Wrapper css={customStyles} isRelative={isHomePage}>
        {alert.message && <AlertMessage type={alert.type} message={alert.message} animate />}
        <WrapperButton>
          {!isOn ? <Title>Sign in</Title> : <Title>Sign up</Title>}
          <Span>or</Span>
          <Button type="button" onClick={toggleIsOn} customStyles={buttonCustom}>
            {!isOn ? "create an account" : "sign in to your account"}
          </Button>
        </WrapperButton>
        <WrapperForm>
          {!isOn ? (
            <LoginForm onSubmit={login} isLoading={isLoading} />
          ) : (
            <SignUpForm onSubmit={register} isLoading={isLoading} />
          )}
        </WrapperForm>
      </Wrapper>
    </>
  );
};

Login.propTypes = {
  customStyles: PropTypes.object,
  register: PropTypes.func,
  login: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  alert: PropTypes.object,
  isCreated: PropTypes.bool,
  isHomePage: PropTypes.bool,
};

export default Login;
