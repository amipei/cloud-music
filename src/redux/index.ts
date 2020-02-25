import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers";

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//@ts-ignore
const store = createStore(reducers, combineReducers(
  applyMiddleware(thunk)
))

export default store