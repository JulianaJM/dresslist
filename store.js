import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunk from "redux-thunk";
import userReducer from "./src/reducers/userReducer";
import messageReducer from "./src/reducers/messageReducer";
import gqlClient from "./apollo.client";

export const history = createBrowserHistory();

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    alert: messageReducer,
  });

const composeEnhancers =
  (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middlewares = [routerMiddleware(history), thunk.withExtraArgument({ client: gqlClient() })];
const store = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
