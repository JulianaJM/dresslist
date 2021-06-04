/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { graphql } from "msw";

export const handlers = [
  // Handles a "Login" mutation
  graphql.mutation("login", (req, res, ctx) => {
    // const { username } = req.variables;
    sessionStorage.setItem("token", "token");
    return res(
      ctx.data({
        login: {
          token: "token",
          __typename: "login",
        },
      })
    );
  }),
  // Handles a "register" mutation
  graphql.mutation("register", (req, res, ctx) => {
    const { username } = req.variables;
    return res(
      ctx.data({
        register: {
          username,
          __typename: "register",
        },
      })
    );
  }),
];
