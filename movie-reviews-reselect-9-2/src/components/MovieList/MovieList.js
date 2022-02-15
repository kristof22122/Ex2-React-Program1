import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MovieListCSS from './MovieList.module.css';

import { Movie } from '../Movie/Movie';
import { CustomPagination } from '../CustomPagination/CustomPagination';

import { reselectPage } from '../../store/page';
import { reselectMovieFromApi } from '../../store/moviesFromApi';
import {
  actions,
} from '../../store';

const {
  actionGetMovieFromApi,
} = actions;

export const MovieList = () => {
  const dispatch = useDispatch();

  const page = useSelector(reselectPage);
  const moviesFromApi = useSelector(reselectMovieFromApi);

  useEffect(() => {
    dispatch(actionGetMovieFromApi(page));

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
