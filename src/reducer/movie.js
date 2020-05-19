import * as movieConstant from "../constant/movies";

const initialState = {
  popular: [],
  nowPlaying: [],
  upComing: [],
  topRated: [],
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case movieConstant.FETCH_POPULAR:
      return {
        ...state,
        popular: [],
      };
    case movieConstant.FETCH_POPULAR_SUCCESS:
      return {
        ...state,
        popular: action.payload,
      };
    case movieConstant.FETCH_POPULAR_FAILURE:
      return {
        ...state,
        popular: [],
      };
    default:
      return state;
  }
};
export default movieReducer;
