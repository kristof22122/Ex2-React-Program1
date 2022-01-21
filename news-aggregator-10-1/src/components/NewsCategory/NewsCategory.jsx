import React, { useState,useEffect, useContext } from 'react';

import NewsCategoryCSS from './NewsCategory.module.css';

import { getTranslation } from '../../translation';
import { LangContext } from '../../context/LangContext';

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

export const NewsCategory = (props) => {
  const {
    setCategoryForApi,
  } = props;
  const { language } = useContext(LangContext);

  const categoryForTranslation = getTranslation('Main.NewsCategory', language);

  const [ category, setCategory ] = useState(['business']);

  const handleChangeCategory = (event) => {
    const {
      name,
      checked,
    } = event.target;

    if (category.length === 1) {
      if (!category.includes(name)) {
        setCategory([ ...category, name ]);
      };
      
      return;
    };

    if (category.length < 5) {
      setCategory(checked ? [ ...category, name ] : category.filter(c => c !== name));
    };
    
    if (!checked) {
      setCategory(category.filter(c => c !== name));
    };
  };

  useEffect(() => {
    setCategoryForApi(category);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div
      className={NewsCategoryCSS.news}
    >
      <ul
        className={NewsCategoryCSS.news__list}
      >
        {newsCategory.map((value, i) => {
          return (
            <li
              key={i}
              className={NewsCategoryCSS.news__listItem}
            >
              <label
                className={NewsCategoryCSS.news__label}
                htmlFor={value}
              >
                {categoryForTranslation[i]}
              </label>
              <input
                type="checkbox"
                id={value}
                name={value}
                checked={category.includes(value)}
                onChange={handleChangeCategory}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
};
