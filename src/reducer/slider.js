import * as sliderConstant from "../constant/slider";
const initialState = {
  slider: [],
};
const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case sliderConstant.FETCH_SLIDER:
      return {
        ...state,
        slider: [],
      };
    case sliderConstant.FETCH_SLIDER_SUCCESS:
      return {
        ...state,
        slider: action.payload,
      };
    case sliderConstant.FETCH_SLIDER_FAILURE:
      return {
        ...state,
        slider: [],
      };
    default:
      return state;
  }
};
export default sliderReducer;
