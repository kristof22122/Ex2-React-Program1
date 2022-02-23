import React, { useState } from 'react';

import NewsSearchCSS from './NewsSearch.module.css';
import { Translation } from '../Translation/Translation';

export const NewsSearch = (props) => {
  const {
    handleClickSearchNews,
  } = props;

  const [ query, setQuery ] = useState(null);

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
          <Translation text={'Main.NewsSearch.title'} />
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
          <Translation text={'Main.NewsSearch.buttonText'} />
        </button>
      </div>
    </div>
  )
};
