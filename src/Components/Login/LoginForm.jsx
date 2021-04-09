import React from "react";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import InputText from "../commons/InputText";
import loginSchema from "./loginSchema";
import Button from "../commons/Button";

const Form = styled.form`
  input {
    margin-bottom: 10px;
  }

  button {
    margin-top: 70px;
  }
`;

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnChange: false,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputText
        label="Email"
        type="email"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
        errorLabel={formik.errors.email}
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

      <Button type="submit" primary>
        Sign in
      </Button>
    </Form>
  );
};

export default LoginForm;
