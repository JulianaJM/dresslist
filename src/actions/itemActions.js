// import { push } from "connected-react-router";
import { addItem } from "../services/itemService";
import { MESSAGE_TYPE } from "../utils/constants";
import {
  CREATE_ITEM_LOADING,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAILURE,
  RESET_ITEM,
} from "./actionTypes";

export const setCreateItemInProgress = isLoading => ({
  type: CREATE_ITEM_LOADING,
  payload: { isLoading },
});

export const setCreateItemSuccess = item => ({
  type: CREATE_ITEM_SUCCESS,
  payload: { item, isCreated: true },
});

export const setCreateItemFailure = alert => ({
  type: CREATE_ITEM_FAILURE,
  payload: { alert },
});

export const resetItem = () => ({
  type: RESET_ITEM,
});

export const createItem = inputItem => (dispatch, _, { client }) => {
  // dispatch, getState, extraArgument

  dispatch(setCreateItemInProgress(true));

  return addItem(client, inputItem)
    .then(data => {
      dispatch(setCreateItemSuccess(data));
      // dispatch(push("/dressinglist"));
    })
    .catch(() => {
      const alert = {
        message: "An error occured during creation please retry ...",
        type: MESSAGE_TYPE.ERROR,
      };
      dispatch(setCreateItemFailure(alert));
    })
    .finally(() => {
      dispatch(setCreateItemInProgress(false));
    });
};
