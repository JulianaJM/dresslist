import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { graphql } from "msw";
import * as actions from "./userActions";
import * as types from "./actionTypes";
import gqlClient from "../../apollo.client";
import { server } from "../../__mocks__/gqlMswServer";

const middlewares = [thunk.withExtraArgument({ client: gqlClient() })];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  it("should create an action to setRegisterInProgress", () => {
    const isLoading = true;
    const expectedAction = {
      type: types.REGISTER_LOADING,
      payload: { isLoading },
    };
    expect(actions.setRegisterInProgress(isLoading)).toEqual(expectedAction);
  });

  it("should create an action to setLoginInProgress", () => {
    const isLoading = true;
    const expectedAction = {
      type: types.LOGIN_LOADING,
      payload: { isLoading },
    };
    expect(actions.setLoginInProgress(isLoading)).toEqual(expectedAction);
  });

  it("should create an action to setRegisterSuccess", () => {
    const payload = {
      user: { username: "toto" },
      alert: { message: "a message", type: "success" },
    };
    const expectedAction = {
      type: types.REGISTER_SUCCESS,
      payload,
    };
    expect(actions.setRegisterSuccess(payload.user, payload.alert)).toEqual(expectedAction);
  });

  it("should create an action to setRegisterFailure", () => {
    const alert = { message: "a message", type: "error" };
    const expectedAction = {
      type: types.REGISTER_FAILURE,
      payload: { alert },
    };
    expect(actions.setRegisterFailure(alert)).toEqual(expectedAction);
  });

  it("should create an action to setLoginSuccess", () => {
    const payload = {
      user: { username: "toto" },
      alert: { message: "a message", type: "success" },
    };
    const expectedAction = {
      type: types.LOGIN_SUCCESS,
      payload,
    };
    expect(actions.setLoginSuccess(payload.user, payload.alert)).toEqual(expectedAction);
  });

  it("should create an action to setLoginFailure", () => {
    const alert = { message: "a message", type: "error" };

    const expectedAction = {
      type: types.LOGIN_FAILURE,
      payload: { alert },
    };
    expect(actions.setLoginFailure(alert)).toEqual(expectedAction);
  });

  it("should create an action to resetAlertMessage", () => {
    const expectedAction = {
      type: types.RESET_ALERT_MESSAGE,
    };
    expect(actions.resetAlertMessage()).toEqual(expectedAction);
  });
});

describe("async actions", () => {
  it("dispatch SUCCESS when fetching for register a user", () => {
    const expectedActions = [
      {
        type: types.REGISTER_LOADING,
        payload: { isLoading: true },
      },
      {
        type: types.RESET_ALERT_MESSAGE,
      },
      {
        type: types.REGISTER_SUCCESS,
        payload: {
          user: { __typename: "register", username: "toto" },
          alert: { message: "Your account is created, please sign in", type: "success" },
        },
      },
      {
        type: "@@router/CALL_HISTORY_METHOD",
        payload: {
          args: ["/login"],
          method: "push",
        },
      },
      {
        type: types.REGISTER_LOADING,
        payload: { isLoading: false },
      },
    ];

    const store = mockStore({ user: {}, message: {} });

    return store
      .dispatch(actions.register({ username: "toto", password: "toto", confirmedPassword: "toto" }))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("dispatch SUCCESS when fetching for login a user", () => {
    const expectedActions = [
      {
        type: types.LOGIN_LOADING,
        payload: { isLoading: true },
      },
      {
        type: types.RESET_ALERT_MESSAGE,
      },
      {
        type: types.LOGIN_SUCCESS,
        payload: {
          user: { __typename: "login", token: "token" },
        },
      },
      {
        type: "@@router/CALL_HISTORY_METHOD",
        payload: {
          args: ["/dressing"],
          method: "push",
        },
      },
      {
        type: types.LOGIN_LOADING,
        payload: { isLoading: false },
      },
    ];

    const store = mockStore({ user: {}, message: {} });

    return store.dispatch(actions.login({ username: "toto", password: "toto" })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("dispatch FAILURE when fetching login failed", () => {
    server.use(
      // override the initial "graphql.mutation("login")" request handler
      // to return a 500 Server Error

      graphql.mutation("login", (req, res, ctx) => ctx.status(500))
    );
    const expectedActions = [
      {
        type: types.LOGIN_LOADING,
        payload: { isLoading: true },
      },
      {
        type: types.RESET_ALERT_MESSAGE,
      },
      {
        type: types.LOGIN_FAILURE,
        payload: {
          alert: { message: "An error occured during login please retry ...", type: "error" },
        },
      },
      {
        type: types.LOGIN_LOADING,
        payload: { isLoading: false },
      },
    ];

    const store = mockStore({ user: {}, message: {} });

    return store.dispatch(actions.login({ username: "toto", password: "toto" })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("dispatch FAILURE when fetching for register failed", () => {
    server.use(
      // override the initial "graphql.mutation("login")" request handler
      // to return a 500 Server Error

      graphql.mutation("register", (req, res, ctx) => ctx.status(500))
    );

    const expectedActions = [
      {
        type: types.REGISTER_LOADING,
        payload: { isLoading: true },
      },
      {
        type: types.RESET_ALERT_MESSAGE,
      },
      {
        type: types.REGISTER_FAILURE,
        payload: {
          alert: { message: "An error occured during sign up please retry ...", type: "error" },
        },
      },
      {
        type: types.REGISTER_LOADING,
        payload: { isLoading: false },
      },
    ];

    const store = mockStore({ user: {}, message: {} });

    return store
      .dispatch(actions.register({ username: "toto", password: "toto", confirmedPassword: "toto" }))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
