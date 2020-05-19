import { combineReducers } from "redux";
import sliderReducer from "./slider";
import movieReducer from "./movie";

const rootReducer = combineReducers({
  sliders: sliderReducer,
  movies: movieReducer,
});

export default rootReducer;
