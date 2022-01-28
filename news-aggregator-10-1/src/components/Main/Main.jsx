import React, { useContext, useState } from 'react';

import MainCSS from './Main.module.css';

import { NewsCategory } from '../NewsCategory/NewsCategory';
import { NewsSearch } from '../NewsSearch/NewsSearch';
import { NewsList } from '../NewsList/NewsList';

import { getNews } from '../../api';

import { LangContext } from '../../context/LangContext';

export const Main = () => {
  const [ page, setPage ] = useState(1);
  const [ news, setNews ] = useState([]);
  const [ queryForApi, setQueryForApi ] = useState(null);
  const [ categoryForApi, setCategoryForApi ] = useState([]);
  const {
    language,
  } = useContext(LangContext);

  const getNewsFromApi = (q, page) => {
    const categoryForApiString = categoryForApi.join(',');

    getNews(q, categoryForApiString, language, page)
      .then(res => {
        setNews((page === 1) ? res : [...news, ...res]);
      });
  }

  const handleClickSearchNews = (search) => {
    setPage(1);
    setQueryForApi(search);
    getNewsFromApi(search, page);
  };

  const handleClickAddPage = () => {
    setPage(current => current + 1);
    getNewsFromApi(queryForApi, page + 1);
  };

  return (
    <div
      className={MainCSS.main}
    >
      <NewsCategory
        setCategoryForApi={setCategoryForApi}

      />
      <NewsSearch
        handleClickSearchNews={handleClickSearchNews}
      />
      <NewsList
        news={news}
        handleClickAddPage={handleClickAddPage}
      />
    </div>
  )
};
