import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MovieCastInfo } from '../MovieCastInfo/MovieCastInfo';
import { MovieReviewInfo } from '../MovieReviewInfo/MovieReviewInfo';
import { MovieInfo } from '../MovieInfo/MovieInfo';

export const MovieAllInfo = () => {
  return (
    <Routes>
      <Route 
        path="/"
        element={
          <MovieInfo />
        }
      />
      <Route 
          path="cast"
          element={
            <MovieCastInfo />
          }
        />
        <Route
          path="review"
          element={
            <MovieReviewInfo />
          }
        />
    </Routes>
  )
}
