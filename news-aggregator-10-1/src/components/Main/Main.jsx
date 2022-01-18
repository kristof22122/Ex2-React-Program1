import React, { useState } from 'react';

import MainCSS from './Main.module.css';

import { NewsCategory } from '../NewsCategory/NewsCategory';
import { NewsSearch } from '../NewsSearch/NewsSearch';
import { NewsList } from '../NewsList/NewsList';

import { getNews } from '../../api';

export const Main = () => {
  const [ news, setNews ] = useState([]);

  const handleClick = (search) => {
    getNews(search)
      .then(res => {
        console.log(res);
        setNews(res);
      });
  };

  return (
    <div
      className={MainCSS.main}
    >
      <NewsCategory />
      <NewsSearch
        handleClick={handleClick}
      />
      <NewsList
        news={news}
      />
    </div>
  )
};
