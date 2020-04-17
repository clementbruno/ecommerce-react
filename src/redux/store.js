import { createStore, applyMiddleware } from "redux"; // applyMiddleware is facultative
import logger from "redux-logger"; // logger is facultative
import rootReducer from "./root-reducer";

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
