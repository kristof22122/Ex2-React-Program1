import React from 'react';

import NewsCategoryCSS from './NewsCategory.module.css';

const newsCategory = [
  'business',
  'entertainment',
  'environment',
  'food',
  'health',
  'politics',
  'science',
  'sports',
  'technology',
  'top',
  'world',
];

export const NewsCategory = () => {
  return (
    <div
      className={NewsCategoryCSS.news}
    >
      <ul
        className={NewsCategoryCSS.news__list}
      >
        {newsCategory.map((category, i) => {
          return (
            <li
              key={i}
              className={NewsCategoryCSS.news__listItem}
            >
              <label
                className={NewsCategoryCSS.news__label}
                htmlFor={category}
              >
                {category}
              </label>
              <input
                type="checkbox"
                id={category}
              />
            </li>
          )
        })}

      </ul>
      
    </div>
  )
};
