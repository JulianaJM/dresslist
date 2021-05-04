/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import * as reducers from "./reducers";
import gqlClient from "../apollo.client";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  ...reducers,
  router: connectRouter(history),
});

const middleware = [
  thunkMiddleware.withExtraArgument({ client: gqlClient() }),
  routerMiddleware(history),
];

function render(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(...middleware)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
