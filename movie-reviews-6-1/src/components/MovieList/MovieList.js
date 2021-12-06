import React, {useState, useEffect} from 'react';

import MovieListCSS from './MovieList.module.css';

import { Movie } from '../Movie/Movie';
import { CustomPagination } from '../CustomPagination/CustomPagination';

import { trendingMovies } from '../../api';

export const MovieList = () => {
  const [ moviesFromApi , setMoviesFromApi ] = useState([]);
  const [ page, setPage ] = useState(1)

  useEffect(() => {
    trendingMovies(page).then(setMoviesFromApi);
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
      <CustomPagination
        setPage={setPage}
      />
    </div>
  )
};
