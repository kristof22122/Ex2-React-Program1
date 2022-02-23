import React, { useState,useEffect} from 'react';

import NewsCategoryCSS from './NewsCategory.module.css';

import { Translation } from '../Translation/Translation';

const newsCategories = [
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

  const [ category, setCategory ] = useState(['business']);

  const handleChangeCategory = (event) => {
    const {
      name,
      checked,
    } = event.target;

    setCategory((currentCategories) => {
      if (currentCategories.length === 1) {
        return (!currentCategories.includes(name)) 
          ? [ ...currentCategories, name] 
          : [...currentCategories];
      };

      return (!checked) 
        ? currentCategories.filter(c => c !== name)
        : currentCategories.length < 5
          ? [ ...currentCategories, name ]
          : [...currentCategories];
    });
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
        {newsCategories.map((value, i) => {

          return (
            <li
              key={i}
              className={NewsCategoryCSS.news__listItem}
            >
              <label
                className={NewsCategoryCSS.news__label}
                htmlFor={value}
              >
                <Translation
                  text={`Main.NewsCategory.${value}`}
                />
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
