import { REGISTER, LOGIN } from "../gql/userQueries";

export const registerUser = (client, inputUser) =>
  client.mutate("register", REGISTER, { ...inputUser }).then(data => data);

export const loginUser = (client, inputUser) =>
  client.mutate("login", LOGIN, { ...inputUser }).then(data => {
    sessionStorage.setItem("token", JSON.stringify(data.token));
    return data;
  });

export const logout = () => {
  sessionStorage.removeItem("token");
};

export const isAuthenticated = () => {
  const token = sessionStorage.getItem("token");

  return !!token;
};
