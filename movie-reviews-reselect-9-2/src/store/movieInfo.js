import { createSelector } from "reselect";

const SET_MOVIE_INFO = 'movieInfo/SET_MOVIE_INFO';

export const actions = {
  setMovieInfo: (value) => ({ type: SET_MOVIE_INFO, value }),
};

const movieInfoReducer = (
  movieInfo = null,
  action,
) => {
  switch (action.type) {
    case SET_MOVIE_INFO:
      return { ...action.value };
  
    default:
      return movieInfo;
  };
};

function selectMovieInfo(state) {
  const {
    movieInfo,
  } = state;

  return movieInfo;
};

export const reselectMovieInfo = createSelector(selectMovieInfo, (movieInfo) => {
  return movieInfo;
});

export default movieInfoReducer;
