const SET_MOVIE_REVIEW_INFO = 'movieReviewInfo/SET_MOVIE_REVIEW_INFO';

export const actions = {
  setMovieReviewInfo: (value) => ({ type: SET_MOVIE_REVIEW_INFO, value }),
};

const movieReviewInfoReducer = (
  movieReviewInfo = null,
  action,
) => {
  switch (action.type) {
    case SET_MOVIE_REVIEW_INFO:
      return [ ...action.value ];
  
    default:
      return movieReviewInfo;
  };
};

export default movieReviewInfoReducer;
