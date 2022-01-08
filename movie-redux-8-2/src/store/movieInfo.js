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

export default movieInfoReducer;
