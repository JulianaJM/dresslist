// import { push } from "connected-react-router";
import { addItem } from "../services/itemService";
import { CREATE_ITEM_LOADING, CREATE_ITEM_SUCCESS, CREATE_ITEM_FAILURE } from "./actionTypes";

export const setCreateItemInProgress = isLoading => ({
  type: CREATE_ITEM_LOADING,
  payload: { isLoading },
});

export const setCreateItemSuccess = (user, alert) => ({
  type: CREATE_ITEM_SUCCESS,
  payload: { user, alert },
});

export const setCreateItemFailure = alert => ({
  type: CREATE_ITEM_FAILURE,
  payload: { alert },
});

export const createItem = inputItem => (dispatch, _, { client }) =>
  // dispatch, getState, extraArgument

  // dispatch(setCreateItemInProgress(true));

  addItem(client, inputItem)
    .then(data => {
      dispatch(setCreateItemSuccess(data, alert));
      // dispatch(push("/login"));
    })
    .catch(() => {
      // dispatch(setCreateItemFailure(alert));
    })
    .finally(() => {
      // dispatch(setCreateItemInProgress(false));
    });
