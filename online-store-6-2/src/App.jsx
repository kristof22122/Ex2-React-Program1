import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';

function App() {
  return (
    <Routes>
      <Route 
        path="/"
        element={
          <Home />
        }
      />
      <Route
        path={`/products/:category`}
        element={
          <ProductList />
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
  );
}

export default App;
