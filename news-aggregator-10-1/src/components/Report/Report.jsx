import React from 'react';

import ReportCSS from './Report.module.css';

export const Report = (props) => {
  const {
    title,
    link,
    pubDate,
    description,
    source_id,
    image_url,
    keywords,
  } = props.report;
  return (
    <div
      className={ReportCSS.report}
    >
      <h3
        className={ReportCSS.report__title}
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </h3>
      <p>
        {description}
      </p>
      <span>
        {pubDate}
      </span>
    </div>
  )
};
