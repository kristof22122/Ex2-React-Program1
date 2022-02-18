import React, { useContext, useEffect, useState } from 'react';

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
  const [ categoryForApi, setCategoryForApi ] = useState(['business']);
  const {
    language,
  } = useContext(LangContext);

  const getNewsFromApi = (q, page) => {
    const categoryForApiString = categoryForApi.join(',');

    getNews(q, categoryForApiString, language, page)
      .then(res => {
        setNews((currentNews) => {
          return (page === 1) ? res : [...currentNews, ...res] 
        });
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

  useEffect(() => {
    getNewsFromApi(queryForApi, page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

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
