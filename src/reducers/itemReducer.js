import { CREATE_ITEM_LOADING, CREATE_ITEM_SUCCESS, RESET_ITEM } from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isCreated: false,
  list: [],
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ITEM_LOADING: {
      const { isLoading } = action.payload;
      return { ...state, isLoading };
    }

    case CREATE_ITEM_SUCCESS: {
      const { item } = action.payload;
      const list = state.list.concat([item]);
      return { ...state, list, isCreated: true };
    }

    case RESET_ITEM: {
      return { ...state, isCreated: false };
    }

    default:
      return state;
  }
}
