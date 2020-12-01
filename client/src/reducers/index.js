import counterReducer from "./counter";
import isStarted from "./isStarted";
import isPrepared from "./isPrepared";
import doAgain from "./doAgain";
import scoreReducer from "./score";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isStarted,
  isPrepared,
  doAgain,
  score: scoreReducer
})

export default allReducers;