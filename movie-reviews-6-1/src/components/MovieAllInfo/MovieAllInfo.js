import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MovieCastInfo } from '../MovieCastInfo/MovieCastInfo';
import { MovieReviewInfo } from '../MovieReviewInfo/MovieReviewInfo';
import { MovieInfo } from '../MovieInfo/MovieInfo';

export const MovieAllInfo = (props) => {
  const {
    setSelectMovieId,
    selectMovieId,
  } = props;

  return (
    <Routes>
      <Route 
        path="/"
        element={
          <MovieInfo 
            selectMovieId={selectMovieId}
            setSelectMovieId={setSelectMovieId}
          />
        }
      />
      <Route 
          path="cast"
          element={
            <MovieCastInfo
              selectMovieId={selectMovieId}
              setSelectMovieId={setSelectMovieId}
            />
          }
        />
        <Route
          path="review"
          element={
            <MovieReviewInfo
              selectMovieId={selectMovieId}
              setSelectMovieId={setSelectMovieId}
            />
          }
        />
    </Routes>
  )
}
