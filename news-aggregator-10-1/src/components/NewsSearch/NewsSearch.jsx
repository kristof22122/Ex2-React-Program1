import React, { useState } from 'react';

import NewsSearchCSS from './NewsSearch.module.css';

export const NewsSearch = (props) => {
  const {
    handleClick,
  } = props;

  const [ search, setSearch ] = useState(null);

  return (
    <div
      className={NewsSearchCSS.search}
    >
      <div
        className={NewsSearchCSS.search__wrapper}
      >
        <label
          htmlFor=""
          className={NewsSearchCSS.search__label}
        >
          news search
        </label>
        <input
          className={NewsSearchCSS.search__input}
          type="text"
          value={search || ''}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button
          className={NewsSearchCSS.search__button}
          type="button"
          onClick={() => {
            handleClick(search);
            setSearch(null);
          }}
        >
          search
        </button>
      </div>
    </div>
  )
};
