import React, { useState } from 'react';

import { translation } from '../translation';

export const LangContext = React.createContext({
  language: 'en',
  setLanguage: null,
});

export const LangProvider = (props) => {
  const [ language, setLanguage ] = useState('en');
  const {
    children,
  } = props;

  const getTranslation = (text) => {
    return translation[language][text];
  }
  const contextValue = {
    language,
    setLanguage,
    getTranslation,
  };

  return (
    <LangContext.Provider value={contextValue}>
      {children}
    </LangContext.Provider>
  );
};
