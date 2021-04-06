import React from "react";
import { useFormik } from "formik";
import InputText from "../commons/InputText";
import signUpSchema from "./signUpSchema";
import Button from "../commons/Button";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    validateOnChange: false,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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

      <InputText
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        error={formik.errors.confirmPassword}
      />

      <Button type="submit" primary>
        Sign up
      </Button>
    </form>
  );
};

export default SignUpForm;
