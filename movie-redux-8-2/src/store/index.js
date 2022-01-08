import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { baseMovieRequest, castMovieRequest, reviewMovieRequest, trendingMovies } from '../api';

import movieCastInfoReducer from "./movieCastInfo";
import movieInfoReducer from "./movieInfo";
import movieReviewInfoReducer from "./movieReviewInfo";
import moviesFromApiReducer from "./moviesFromApi";
import pageReducer from "./page";

export function getMoviesFromApi(state) {
  const {
    moviesFromApi,
  } = state;

  return moviesFromApi;
};

export function getPage(state) {
  const {
    page,
  } = state;

  return page;
};

export function getMovieInfo(state) {
  const {
    movieInfo,
  } = state;

  return movieInfo;
};

export function getMovieCastInfo(state) {
  const {
    movieCastInfo,
  } = state;

  return movieCastInfo;
};

export function getMovieReviewInfo(state) {
  const {
    movieReviewInfo,
  } = state;

  return movieReviewInfo;
};

function basePromiseAction(callback) {
  return (value) => () => {
    return new Promise(resolve => {
      resolve(callback(value));
    });
  };
};

export const actions = {
  readTrendingMovies: basePromiseAction(trendingMovies),
  readMovieInfo: basePromiseAction(baseMovieRequest),
  readMovieCastInfo: basePromiseAction(castMovieRequest),
  readMovieReviewInfo: basePromiseAction(reviewMovieRequest),
};

const reducer = combineReducers({
  moviesFromApi: moviesFromApiReducer,
  page: pageReducer,
  movieInfo: movieInfoReducer,
  movieCastInfo: movieCastInfoReducer,
  movieReviewInfo: movieReviewInfoReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;