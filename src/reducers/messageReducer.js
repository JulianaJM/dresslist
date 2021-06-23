import {
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  RESET_ALERT_MESSAGE,
  REGISTER_SUCCESS,
  CREATE_ITEM_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  message: "",
  type: "",
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case CREATE_ITEM_FAILURE: {
      const { alert } = action.payload;
      return { ...state, ...alert };
    }

    case RESET_ALERT_MESSAGE: {
      return initialState;
    }

    default:
      return state;
  }
}
