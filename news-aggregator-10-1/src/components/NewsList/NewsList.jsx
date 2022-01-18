import React from 'react';

import NewsListCSS from './NewsList.module.css';

import { Report } from '../Report/Report';

import { useId } from 'react-id-generator';

export const NewsList = (props) => {
  const {
    news,
  } = props;
  const liId = useId(news.length);

  return (
    <div
      className={NewsListCSS.newsList}
    >
      <h1
        className={NewsListCSS.newsList__title}
      >
        news list
      </h1>
      <ul
        className={NewsListCSS.newsList__list}
      >
        {news.length === 0 ? (
          <>
            <h4
              className={NewsListCSS.newsList__noNews}
            >
              no news found
            </h4>
          </>
        ) 
        : (
          news.map((report, i) => {
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
          })
        )}
      </ul>
    </div>
  )
};
