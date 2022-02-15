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

export const actions = {
  actionGetMovieFromApi: (value) => {
    return (dispatch) => {
      trendingMovies(value)
        .then(res => {
          dispatch(setMovies(res));
        });
    };
  },
  actionGetMovieInfoFromApi: (value) => {
    return (dispatch) => {
      baseMovieRequest(value)
        .then(res => {
          dispatch(setMovieInfo(res));
        });

      dispatch(setPage(1));
    }
  },
  actionGetMovieReviewInfoFromApi: (value) => {
    return (dispatch) => {
      reviewMovieRequest(value)
        .then(res => {
          dispatch(setMovieReviewInfo(res.results));
        });

      dispatch(setPage(1));
    }
  },
  actionGetMovieCostInfoFromApi: (value) => {
    return (dispatch) => {
      castMovieRequest(value)
        .then(res => {
          dispatch(setMovieCastInfo(res));
        });

      dispatch(setPage(1));
    }
  },
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