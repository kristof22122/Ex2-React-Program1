import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import AppCSS from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MovieList } from './components/MovieList/MovieList';
import { MovieAllInfo } from './components/MovieAllInfo/MovieAllInfo';

function App() {

  return (
    <div className={AppCSS.App}>
      <Routes>
        <Route
          path="/"
          element={
            <MovieList />
          }
        />
        <Route
          path={`/movies/:id/*`}
          element={
            <MovieAllInfo />
          }
        />
        <Route 
          path="*"
          element={
            <Navigate
              to="/" 
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
