import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation register($username: String!, $password: String!, $confirmedPassword: String!) {
    register(username: $username, password: $password, confirmedPassword: $confirmedPassword) {
      username
    }
  }
`;
