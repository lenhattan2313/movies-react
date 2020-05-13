import * as sliderConstant from "../constant/slider";

export const fetchSlider = () => {
  return {
    type: sliderConstant.FETCH_SLIDER,
  };
};
export const fetchSliderSuccess = (data) => {
  return {
    type: sliderConstant.FETCH_SLIDER_SUCCESS,
    payload: data,
  };
};
export const fetchSliderFailure = (error) => {
  return {
    type: sliderConstant.FETCH_SLIDER_FAILURE,
    payload: error,
  };
};
