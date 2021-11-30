import React from 'react';

import MovieListCSS from './MovieList.module.css';

import { Movie } from '../Movie/Movie';

export const MovieList = (props) => {
  const {
    moviesFromApi,
    setSelectMovieId,
  } = props;
  
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
                  setSelectMovieId={setSelectMovieId}
                  className="col"
                />
              </div>
            )})}
        </div>
      </div>
    </div>
  )
};
