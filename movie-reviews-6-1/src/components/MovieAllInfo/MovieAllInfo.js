import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import { MovieCastInfo } from '../MovieCastInfo/MovieCastInfo';
import { MovieReviewInfo } from '../MovieReviewInfo/MovieReviewInfo';
import { MovieInfo } from '../MovieInfo/MovieInfo';

export const MovieAllInfo = () => {
  let params = useParams();
  const movieId = +params.id;

  return (
    <Routes>
      <Route 
        path="/"
        element={
          <MovieInfo
            movieId={movieId}
          />
        }
      />
      <Route 
          path="cast"
          element={
            <MovieCastInfo
              movieId={movieId}
            />
          }
        />
        <Route
          path="review"
          element={
            <MovieReviewInfo
              movieId={movieId}
            />
          }
        />
    </Routes>
  )
}
