import * as sliderConstant from "../constant/slider";

export const fetchSlider = () => {
  return {
    type: sliderConstant.FETCH_SLIDER,
  };
};
export const fetchSliderSuccess = (payload) => {
  return {
    type: sliderConstant.FETCH_SLIDER_SUCCESS,
    payload,
  };
};
export const fetchSliderFailure = (payload) => {
  return {
    type: sliderConstant.FETCH_SLIDER_FAILURE,
    payload,
  };
};
