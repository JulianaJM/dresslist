import { REGISTER_FAILURE, LOGIN_FAILURE, REGISTER_SUCCESS } from "../actions/actionTypes";

import messageReducer from "./messageReducer";

const initialState = {
  message: "",
  type: "",
};

describe("messageReducer", () => {
  it("should return the initial state", () => {
    expect(messageReducer(undefined, {})).toEqual(initialState);
  });

  it("should create an alert when REGISTER_FAILURE", () => {
    expect(
      messageReducer(initialState, {
        type: REGISTER_FAILURE,
        payload: { alert: { message: "message", type: "error" } },
      })
    ).toEqual({
      message: "message",
      type: "error",
    });
  });

  it("should create an alert when LOGIN_FAILURE", () => {
    expect(
      messageReducer(initialState, {
        type: LOGIN_FAILURE,
        payload: { alert: { message: "message", type: "error" } },
      })
    ).toEqual({
      message: "message",
      type: "error",
    });
  });

  it("should create an alert when REGISTER_SUCCESS", () => {
    expect(
      messageReducer(initialState, {
        type: REGISTER_SUCCESS,
        payload: { alert: { message: "message", type: "success" } },
      })
    ).toEqual({
      message: "message",
      type: "success",
    });
  });
});
