import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { baseMovieRequest, castMovieRequest, reviewMovieRequest, trendingMovies } from '../api';

import movieCastInfoReducer from "./movieCastInfo";
import movieInfoReducer from "./movieInfo";
import movieReviewInfoReducer from "./movieReviewInfo";
import moviesFromApiReducer from "./moviesFromApi";
import pageReducer from "./page";

import { actions as moviesFromApiAction } from '../store/moviesFromApi';
import { actions as movieInfoAction } from '../store/movieInfo';
import { actions as movieReviewInfoAction } from '../store/movieReviewInfo';
import { actions as movieCastInfoAction } from '../store/movieCastInfo';
import { actions as pageAction } from '../store/page';

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

const {
  setMovies,
} = moviesFromApiAction;

const {
  setMovieInfo,
} = movieInfoAction;

const {
  setMovieReviewInfo,
} = movieReviewInfoAction;

const {
  setMovieCastInfo,
} = movieCastInfoAction;

const {
  setPage,
} = pageAction;

const baseApiRequestFunction = (request, setValue, label) => {
  return (value) => {
    return (dispatch) => {
      request(value)
        .then(res => {
          if (label === 'review') {
            dispatch(setValue(res.results));
          } else {
            dispatch(setValue(res));
          }
        });
      
      if (label !== 'allMovie') {
        dispatch(setPage(1));
      }
    }
  }
};

export const actions = {
  getMovieFromApi: baseApiRequestFunction(trendingMovies, setMovies, 'allMovie'),
  getMovieInfoFromApi: baseApiRequestFunction(baseMovieRequest, setMovieInfo, 'other'),
  getMovieReviewInfoFromApi: baseApiRequestFunction(reviewMovieRequest, setMovieReviewInfo, 'review'),
  getMovieCostInfoFromApi: baseApiRequestFunction(castMovieRequest, setMovieCastInfo, 'other'),
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