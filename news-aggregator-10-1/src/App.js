import React from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import { LangProvider } from './context/LangContext';

function App() {
  return (
    <LangProvider>
      <div className="App">
        <Header />
        <Main />
      </div>
    </LangProvider>
  );
};

export default App;
