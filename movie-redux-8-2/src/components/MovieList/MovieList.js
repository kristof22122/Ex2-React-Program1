import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieListCSS from './MovieList.module.css';

import { Movie } from '../Movie/Movie';
import { CustomPagination } from '../CustomPagination/CustomPagination';

import { actions, getMoviesFromApi, getPage } from '../../store';
import { actions as moviesFromApiAction } from '../../store/moviesFromApi';


export const MovieList = () => {
  const dispatch = useDispatch();

  const page = useSelector(getPage);
  const moviesFromApi = useSelector(getMoviesFromApi);

  const {
    readTrendingMovies,
  } = actions;

  const {
    setMovies,
  } = moviesFromApiAction;

  useEffect(() => {
    dispatch(readTrendingMovies(page))
      .then(res => {
        dispatch(setMovies(res));
      });

    window.scroll(0, 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  
  return (
    <div
      className={MovieListCSS.movies}
    >
      <h1
        className={MovieListCSS.movies__title}
      >
        Movie reviews
      </h1>
      <div
        className="container"
      >
        <div
          className="row row-cols-lg-5"
        >
          {moviesFromApi.map(movie => {
            return (
              <div
                key={movie.id}
                className={MovieListCSS.movies__list}
              >
                <Movie
                  movie={movie}
                  className="col"
                />
              </div>
            )})}
        </div>
      </div>
      <CustomPagination />
    </div>
  )
};
