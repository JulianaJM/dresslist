import React from "react";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import InputText from "../common/InputText";
import loginSchema from "./loginSchema";
import Button from "../common/Button";

const Form = styled.form`
  input {
    margin-bottom: 10px;
  }

  button {
    margin-top: 70px;
  }
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

      <Button type="submit" disabled={isLoading} primary>
        Sign in
      </Button>
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default LoginForm;
