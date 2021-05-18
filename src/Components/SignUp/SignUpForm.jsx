import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import styled from "@emotion/styled";
import InputText from "../common/InputText/InputText";
import signUpSchema from "./signUpSchema";
import Button from "../common/Button/Button";

const Form = styled.form`
  input {
    margin-bottom: 10px;
  }

  button {
    margin-top: 70px;
  }
`;

const SignUpForm = ({ onSubmit, isLoading }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmedPassword: "",
    },
    validationSchema: signUpSchema,
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

      <InputText
        label="Confirm Password"
        type="password"
        id="confirmedPassword"
        name="confirmedPassword"
        value={formik.values.confirmedPassword}
        onChange={formik.handleChange}
        error={formik.errors.confirmedPassword}
      />

      <Button type="submit" disabled={isLoading} primary>
        Sign up
      </Button>
    </Form>
  );
};

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default SignUpForm;
