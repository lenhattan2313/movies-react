import { combineReducers } from "redux";
import sliderReducer from "./slider";

const rootReducer = combineReducers({ sliders: sliderReducer });

export default rootReducer;
