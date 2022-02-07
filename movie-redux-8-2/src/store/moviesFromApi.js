const SET_MOVIES = 'moviesFromApi/SET_MOVIES';

export const actions = {
  setMovies: (movies) => ({ type: SET_MOVIES, movies }),
};

const moviesFromApiReducer = (
  moviesFromApi = [],
  action,
) => {
  switch (action.type) {
    case SET_MOVIES:
      return [...action.movies];
  
    default:
      return moviesFromApi;
  };
};

export function selectMoviesFromApi(state) {
  const {
    moviesFromApi,
  } = state;

  return moviesFromApi;
};

export default moviesFromApiReducer;
