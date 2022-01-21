import React, { useState } from 'react';

export const LangContext = React.createContext({
  language: 'en',
  setLanguage: () => {},
});

export const LangProvider = (props) => {
  const [ language, setLanguage ] = useState('en');
  const {
    children,
  } = props;

  const contextValue = {
    language,
    setLanguage,
  };

  return (
    <LangContext.Provider value={contextValue}>
      {children}
    </LangContext.Provider>
  );
}