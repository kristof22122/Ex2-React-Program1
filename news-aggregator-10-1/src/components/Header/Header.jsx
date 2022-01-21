import React, { useState, useContext, useEffect } from 'react';

import HeaderSCSS from './Header.module.css';

import { getTranslation } from '../../translation';

import { LangContext } from '../../context/LangContext';

const language = [
  'en',
  'de',
  'fr',
];

export const Header = () => {
  const { language: languageForTranslate, setLanguage } = useContext(LangContext);

  const [ lan, setLan ] = useState('en');

  const handleChangeLanguage = (event) => {
    const {
      value,
    } = event.target;

    setLan(value);
  };

  useEffect(() => {
    setLanguage(lan);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lan]);

  return (
    <header
      className={HeaderSCSS.news__header}
    >
      <h2
        className={HeaderSCSS.news__title}
      >
        {getTranslation('Header.title', languageForTranslate)}
      </h2>
      <select
        className={HeaderSCSS.news__select}
        value={lan}
        onChange={handleChangeLanguage}
      >
        {language.map((lan, i) => {
          return (
            <option
              className={HeaderSCSS.news__option}
              key={i}
              value={lan}
            >
              {lan}
            </option>
          )
        })}
      </select>
    </header>
  );
};
