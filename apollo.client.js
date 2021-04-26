import { ApolloClient, InMemoryCache } from "@apollo/client";

const gqlClient = () => {
  const cache = new InMemoryCache();

  // Initialize ApolloClient
  const client = new ApolloClient({
    cache,
    uri: process.env.APOLLO_SERVER_URI,
    headers: {
      authorization: sessionStorage.getItem("token") || "",
    },
  });

  const query = (name, query, variables) =>
    client
      .query({
        query,
        variables,
      })
      .then(({ data }) => data[name]);

  const mutate = (name, mutation, variables) =>
    client
      .mutate({
        mutation,
        variables,
      })
      .then(({ data }) => data[name]);

  return { query, mutate };
};

export default gqlClient;
