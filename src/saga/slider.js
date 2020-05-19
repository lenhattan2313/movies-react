import { take, put, takeLatest, fork, call } from "redux-saga/effects";
import * as sliderActions from "../actions/slider";
import * as sliderConstant from "../constant/slider";
import * as sliderAPI from "../api/slider";

function* fetchSliderSaga() {
  const response = yield call(sliderAPI.fetchSliderAPI);
  const { data, status } = response;
  if (status === 200) {
    yield put(sliderActions.fetchSliderSuccess(data));
  } else {
    yield put(sliderActions.fetchSliderFailure(data));
  }
}

export function* sliderSaga() {
  yield takeLatest(sliderConstant.FETCH_SLIDER, fetchSliderSaga);
}
