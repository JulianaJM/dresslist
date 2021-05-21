import React from "react";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import InputText from "../common/InputText/InputText";
import loginSchema from "./loginSchema";
import Button from "../common/Button/Button";
import { mq } from "../../utils/breakpoints";

const Form = styled.form`
  input {
    margin-bottom: 10px;
  }

  button {
    margin-top: 70px;
    ${mq({
      width: ["100%", "50%"],
    })}
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginForm = ({ onSubmit, isLoading }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnChange: false,
    onSubmit: values => {
      onSubmit({ ...values });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputText
        label="Email"
        type="email"
        id="username"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.errors.username}
        errorLabel={formik.errors.username}
      />

      <InputText
        label="Password"
        type="password"
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <ButtonWrapper>
        <Button type="submit" disabled={isLoading} primary>
          Sign in
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default LoginForm;
