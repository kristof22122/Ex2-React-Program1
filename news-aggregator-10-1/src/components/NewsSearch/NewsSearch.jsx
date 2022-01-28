import React, { useContext, useState } from 'react';

import NewsSearchCSS from './NewsSearch.module.css';

import { getTranslation } from '../../translation';
import { LangContext } from '../../context/LangContext';

export const NewsSearch = (props) => {
  const {
    handleClickSearchNews,
  } = props;

  const [ query, setQuery ] = useState(null);

  const { language } = useContext(LangContext);

  return (
    <div
      className={NewsSearchCSS.search}
    >
      <div
        className={NewsSearchCSS.search__wrapper}
      >
        <label
          htmlFor="search"
          className={NewsSearchCSS.search__label}
        >
          {getTranslation('Main.NewsSearch.title', language)}
        </label>
        <input
          className={NewsSearchCSS.search__input}
          id="search"
          type="text"
          value={query || ''}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <button
          className={NewsSearchCSS.search__button}
          type="button"
          onClick={() => {
            handleClickSearchNews(query);
            setQuery(null);
          }}
        >
          {getTranslation('Main.NewsSearch.buttonText', language)}
        </button>
      </div>
    </div>
  )
};
