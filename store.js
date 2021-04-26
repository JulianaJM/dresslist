import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunk from "redux-thunk";
import userReducer from "./src/reducers/userReducer";
import messageReducer from "./src/reducers/messageReducer";
import gqlClient from "./apollo.client";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: userReducer,
  alert: messageReducer,
  router: connectRouter(history),
});

const composeEnhancers =
  (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleware = [thunk.withExtraArgument({ client: gqlClient() }), routerMiddleware(history)];
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
