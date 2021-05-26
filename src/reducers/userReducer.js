import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isCreated: false,
  user: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_LOADING: {
      const { isLoading } = action.payload;
      return { ...state, isLoading, isCreated: false };
    }

    case LOGIN_LOADING: {
      const { isLoading } = action.payload;
      return { ...state, isLoading };
    }

    case REGISTER_SUCCESS: {
      const { user } = action.payload;
      return { ...state, isCreated: !!user.username };
    }

    case LOGIN_SUCCESS: {
      const { user } = action.payload;
      return { ...state, user };
    }

    default:
      return state;
  }
}
