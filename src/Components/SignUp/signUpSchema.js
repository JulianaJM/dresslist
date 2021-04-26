import * as yup from "yup";

const signUpSchema = yup.object({
  username: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmedPassword: yup
    .string()
    .when("password", {
      is: val => !!(val && val.length > 0),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Both password need to be the same")
        .required("Both password need to be the same"),
    })
    .required("Confirm password is required"),
});

export default signUpSchema;
