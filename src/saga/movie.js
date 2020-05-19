import { put, takeLatest, call } from "redux-saga/effects";
import * as movieConstant from "../constant/movies";
import * as movieAPI from "../api/movie";
import * as movieActions from "../actions/movie";
function* fetchPopularSaga() {
  console.log("a");
  const response = yield call(movieAPI.fetchPopularAPI);
  const { data, status } = response;
  if (status === 200) {
    yield put(movieActions.fetchPopularSuccess(data));
  } else {
    yield put(movieActions.fetchPopularFailure(data));
  }
}
export function* movieSaga() {
  yield takeLatest(movieConstant.FETCH_POPULAR, fetchPopularSaga);
}
