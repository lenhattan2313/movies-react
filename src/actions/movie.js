import * as movieConstant from "../constant/movies";

export const fetchPopular = () => {
  return {
    type: movieConstant.FETCH_POPULAR,
  };
};
export const fetchPopularSuccess = (data) => {
  return {
    type: movieConstant.FETCH_POPULAR_SUCCESS,
    payload: data,
  };
};
export const fetchPopularFailure = (error) => {
  return {
    type: movieConstant.FETCH_POPULAR_FAILURE,
    payload: error,
  };
};

export const fetchNowPlaying = () => {
  return {
    type: movieConstant.FETCH_NOWPLAYING,
  };
};
export const fetchNowPlayingSuccess = (data) => {
  return {
    type: movieConstant.FETCH_NOWPLAYING_SUCCESS,
    payload: data,
  };
};
export const fetchNowPlayingFailure = (error) => {
  return {
    type: movieConstant.FETCH_NOWPLAYING_FAILURE,
    payload: error,
  };
};

export const fetchUpComing = () => {
  return {
    type: movieConstant.FETCH_UPCOMING,
  };
};
export const fetchUpComingSuccess = (data) => {
  return {
    type: movieConstant.FETCH_UPCOMING_SUCCESS,
    payload: data,
  };
};
export const fetchUpComingFailure = (error) => {
  return {
    type: movieConstant.FETCH_UPCOMING_FAILURE,
    payload: error,
  };
};

export const fetchTopRated = () => {
  return {
    type: movieConstant.FETCH_TOPRATED,
  };
};
export const fetchTopRatedSuccess = (data) => {
  return {
    type: movieConstant.FETCH_TOPRATED_SUCCESS,
    payload: data,
  };
};
export const fetchTopRatedFailure = (error) => {
  return {
    type: movieConstant.FETCH_TOPRATED_FAILURE,
    payload: error,
  };
};
