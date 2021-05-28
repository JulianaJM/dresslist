import {
  REGISTER_SUCCESS,
  REGISTER_LOADING,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../actions/actionTypes";

import userReducer from "./userReducer";

const initialState = {
  isLoading: false,
  isCreated: false,
  user: {},
};

describe("userReducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle REGISTER_LOADING", () => {
    expect(
      userReducer(initialState, {
        type: REGISTER_LOADING,
        payload: { isLoading: true },
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it("should handle REGISTER_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: REGISTER_SUCCESS,
        payload: { user: { username: "username" } },
      })
    ).toEqual({
      ...initialState,
      isCreated: true,
    });
  });

  it("should handle LOGIN_LOADING", () => {
    expect(
      userReducer(initialState, {
        type: LOGIN_LOADING,
        payload: { isLoading: true },
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: LOGIN_SUCCESS,
        payload: { user: { token: "token" } },
      })
    ).toEqual({
      ...initialState,
      user: { token: "token" },
    });
  });
});
