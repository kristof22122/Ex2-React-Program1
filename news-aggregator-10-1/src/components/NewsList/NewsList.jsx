import React from 'react';

import NewsListCSS from './NewsList.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Report } from '../Report/Report';

import { useId } from 'react-id-generator';

import { Translation } from '../Translation/Translation';

export const NewsList = (props) => {
  const {
    news,
    handleClickAddPage,
  } = props;
  const liId = useId(news.length);

  return (
    <div
      className={NewsListCSS.newsList}
    >
      <h1
        className={NewsListCSS.newsList__title}
      >
        <Translation text={'Main.NewsList.title'} />
      </h1>
      
        {news.length === 0 ? (
          <>
            <h4
              className={NewsListCSS.newsList__noNews}
            >
              <Translation text={'Main.NewsList.error'} />
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
