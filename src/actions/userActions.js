import { registerUser, loginUser } from "../services/authenticationService";
import { MESSAGE_TYPE } from "../utils/constants";
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_FAILURE,
  RESET_ALERT_MESSAGE,
} from "./actionTypes";

const setRegisterInProgress = isLoading => ({
  type: REGISTER_LOADING,
  payload: { isLoading },
});

const setLoginInProgress = isLoading => ({
  type: LOGIN_LOADING,
  payload: { isLoading },
});

const setRegisterSuccess = (user, alert) => ({
  type: REGISTER_SUCCESS,
  payload: { user, alert },
});

const setRegisterFailure = alert => ({
  type: REGISTER_FAILURE,
  payload: { alert },
});

const setLoginSuccess = (user, alert) => ({
  type: LOGIN_SUCCESS,
  payload: { user, alert },
});

const setLoginFailure = alert => ({
  type: LOGIN_FAILURE,
  payload: { alert },
});

const resetAlertMessage = () => ({
  type: RESET_ALERT_MESSAGE,
});

export const register = inputUser => (dispatch, _, { client }) =>
  // dispatch, getState, extraArgument
  {
    dispatch(setRegisterInProgress(true));
    dispatch(resetAlertMessage());

    registerUser(client, inputUser)
      .then(data => {
        const alert = {
          message: "Your account is created, please sign in",
          type: MESSAGE_TYPE.SUCCESS,
        };
        dispatch(setRegisterSuccess(data, alert));
      })
      .catch(() => {
        const alert = {
          message: "An error occured during sign up please retry ...",
          type: MESSAGE_TYPE.ERROR,
        };
        dispatch(setRegisterFailure(alert));
      })
      .finally(() => {
        dispatch(setRegisterInProgress(false));
      });
  };

export const login = inputUser => (dispatch, _, { client }) => {
  dispatch(setLoginInProgress(true));
  dispatch(resetAlertMessage());

  loginUser(client, inputUser)
    .then(data => {
      dispatch(setLoginSuccess(data));
    })
    .catch(() => {
      const alert = {
        message: "An error occured during login please retry ...",
        type: MESSAGE_TYPE.ERROR,
      };
      dispatch(setLoginFailure(alert));
    })
    .finally(() => {
      dispatch(setLoginInProgress(false));
    });
};
