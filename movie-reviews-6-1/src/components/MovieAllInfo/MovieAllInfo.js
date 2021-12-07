import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import { MovieCastInfo } from '../MovieCastInfo/MovieCastInfo';
import { MovieReviewInfo } from '../MovieReviewInfo/MovieReviewInfo';
import { MovieInfo } from '../MovieInfo/MovieInfo';

export const MovieAllInfo = () => {
  const params = useParams();
  const {
    id,
  } = params;

  return (
    <Routes>
      <Route 
        path="/"
        element={
          <MovieInfo
            movieId={id}
          />
        }
      />
      <Route 
          path="cast"
          element={
            <MovieCastInfo
              movieId={id}
            />
          }
        />
        <Route
          path="review"
          element={
            <MovieReviewInfo
              movieId={id}
            />
          }
        />
    </Routes>
  )
}
