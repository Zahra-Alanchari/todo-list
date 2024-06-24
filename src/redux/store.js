import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import todoReducer from "./reducer";
import todoSagas from "./sagas";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(todoSagas)
export default store;
