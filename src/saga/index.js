import { take, put, takeLatest, fork, call } from "redux-saga/effects";
import * as sliderActions from "../actions/slider";
import * as sliderConstant from "../constant/slider";
import * as sliderAPI from "../api/slider";
/*
takeLatest: mỗi khi action được dispatch thì chạy function này, nhận về một action và func. nonBlocking
fork như bộ theo dõi nonblocking: có nhiều bộ theo dõi cùng lúc (dispatch nhiều action cùng lúc)
take: đc kích hoạt khi action đc dispatch và tạm dừng khi nhận đc action // blocking sử dụng vòng lặp vô tận để luôn lắng nghe và xử lý action
call: dùng để gửi request API // blocking trả về promise và tạm dừng saga khi promise đc resolve
put: dùng để dispatch action, non-blocking. Kết hợp put, take, call để hoàn thành quá trình gọi API
*/
function* fetchSliderSaga() {
  while (true) {
    yield take(sliderConstant.FETCH_SLIDER);
    const response = yield call(sliderAPI.fetchSliderAPI);
    const { data, status } = response;
    if (status === 200) {
      yield put(sliderActions.fetchSliderSuccess(data));
    } else {
      yield put(sliderActions.fetchSliderFailure(data));
    }
  }
}

function* rootSaga() {
  yield fork(fetchSliderSaga);
}
export default rootSaga;
