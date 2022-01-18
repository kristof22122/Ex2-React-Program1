import React from 'react';

import HeaderSCSS from './Header.module.css';

const language = [
  'ua',
  'en',
  'fr',
];

export const Header = () => {
  return (
    <header
      className={HeaderSCSS.news__header}
    >
      <h2
        className={HeaderSCSS.news__title}
      >
        multilingual news aggregator
      </h2>
      <select
        className={HeaderSCSS.news__select}
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
  )
};
