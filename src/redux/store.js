import { createStore, applyMiddleware } from "redux"; // applyMiddleware is facultative
import logger from "redux-logger"; // logger is facultative
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
