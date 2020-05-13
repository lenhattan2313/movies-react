import { combineReducers } from "redux";
import sliderReducer from "./slider";

const rootReducer = combineReducers({ slider: sliderReducer });

export default rootReducer;
