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
      <div className="card" style={{width: "100%"}}>
        {image_url 
        ? (
          <img src={image_url} className="card-img-top" alt={source_id} />
        ) 
        : (
          <img src="no_image.png" className="card-img-top" alt={source_id} />
        )}
        <div className="card-body">
          <h5 className="card-title"><a href={link} target="_blank" rel="noreferrer" className="card-link">{title}</a></h5>
          <p className="card-text">{description}</p>
          <div>
            {'Date: '}
            {pubDate}
          </div>
          {source_id && (
            <>
              {'Source: '}
              <span>
                {source_id}
              </span>
            </>
          )}
        </div>
        <div
          className="card-body"
        >
          {keywords && keywords.map((word, i) => {
            return (
              <p
                className="card-text"
                key={i}
                style={{ display: 'inline-block', margin: 0}}
              >
                {' | '}
                <a
                  href="#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {`#${word}`}
                </a>
                {' | '}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
};
