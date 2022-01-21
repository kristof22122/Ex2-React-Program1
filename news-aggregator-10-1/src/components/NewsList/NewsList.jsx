import React, { useContext } from 'react';

import NewsListCSS from './NewsList.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Report } from '../Report/Report';

import { useId } from 'react-id-generator';

import { getTranslation } from '../../translation';

import { LangContext } from '../../context/LangContext';



export const NewsList = (props) => {
  const {
    news,
    handleClickAddPage,
  } = props;
  const liId = useId(news.length);

  const { language } = useContext(LangContext);

  return (
    <div
      className={NewsListCSS.newsList}
    >
      <h1
        className={NewsListCSS.newsList__title}
      >
        {getTranslation('Main.NewsList.title', language)}
      </h1>
      
        {news.length === 0 ? (
          <>
            <h4
              className={NewsListCSS.newsList__noNews}
            >
              {getTranslation('Main.NewsList.error', language)}
            </h4>
          </>
        ) 
        : (
          <div className={NewsListCSS.newsList__container}>
            <ul
              className={NewsListCSS.newsList__list}
            >
              {news.map((report, i) => {
                return (
                  <li
                    className={NewsListCSS.newsList__item}
                    key={liId[i]}
                  >
                    <Report 
                      report={report}
                    />
                  </li>
                )
              })}
            </ul>
            <div>
              <button
                className="btn btn-link" 
                type="button"
                onClick={handleClickAddPage}
              >
                Add more...
              </button>
            </div>
          </div>
        )}
    </div>
  )
};
