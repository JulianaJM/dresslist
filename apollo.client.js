import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

const link = new HttpLink({
  uri: process.env.APOLLO_SERVER_URI,
  // outgoing requests are captured and deferred until service worker is ready.
  fetch: (...args) => fetch(...args),
});

const gqlClient = () => {
  const cache = new InMemoryCache();

  // Initialize ApolloClient
  const client = new ApolloClient({
    cache,
    link,
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
