const SET_MOVIE_CAST_INFO = 'movieCastInfo/SET_MOVIE_CAST_INFO';

export const actions = {
  setMovieCastInfo: (value) => ({ type: SET_MOVIE_CAST_INFO, value }),
};

const movieCastInfoReducer = (
  movieCastInfo = null,
  action,
) => {
  switch (action.type) {
    case SET_MOVIE_CAST_INFO:
      return { ...action.value };
  
    default:
      return movieCastInfo;
  };
};

export function selectMovieCastInfo(state) {
  const {
    movieCastInfo,
  } = state;

  return movieCastInfo;
};

export default movieCastInfoReducer;
