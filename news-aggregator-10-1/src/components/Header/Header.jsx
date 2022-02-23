import React, { useContext } from 'react';

import HeaderSCSS from './Header.module.css';

import { LangContext } from '../../context/LangContext';

import { Translation } from '../Translation/Translation';

const languages = [
  'en',
  'de',
  'fr',
];

export const Header = () => {
  const {
    language: languageForTranslate,
    setLanguage,
  } = useContext(LangContext);

  const handleChangeLanguage = (event) => {
    const {
      value,
    } = event.target;

    setLanguage(value)
  };

  return (
    <header
      className={HeaderSCSS.news__header}
    >
      <h2
        className={HeaderSCSS.news__title}
      >
        <Translation text={'Header.title'} />
      </h2>
      <select
        className={HeaderSCSS.news__select}
        value={languageForTranslate}
        onChange={handleChangeLanguage}
      >
        {languages.map((lan, i) => {
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
