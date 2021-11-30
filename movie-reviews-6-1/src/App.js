import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppCSS from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MovieList } from './components/MovieList/MovieList';
import { MovieAllInfo } from './components/MovieAllInfo/MovieAllInfo';

import { baseApiRequest } from './api';

function App() {
  const [ moviesFromApi , setMoviesFromApi ] = useState([]);
  const [ selectMovieId, setSelectMovieId ] = useState(null);

  useEffect(() => {
    baseApiRequest(1).then(res => {
      setMoviesFromApi(res.data.results);
    });
  }, []);

  return (
    <div className={AppCSS.App}>
      <Routes>
        <Route
          path="/"
          element={
            <MovieList 
              moviesFromApi={moviesFromApi}
              setSelectMovieId={setSelectMovieId}
            />
          }
        />
        <Route
          path={(selectMovieId) ? `/movies/:${selectMovieId}/*` : '/'}
          element={
            <MovieAllInfo
              selectMovieId={selectMovieId}
              setSelectMovieId={setSelectMovieId}
            />
          }
        />
        <Route 
          path="*"
          element={
            <MovieList 
              moviesFromApi={moviesFromApi}
              setSelectMovieId={setSelectMovieId}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
