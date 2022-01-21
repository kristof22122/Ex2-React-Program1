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
      {/* <h3
        classNameName={ReportCSS.report__title}
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
        {' '}
        {source_id}
        {' '}
      </span>
      <img
        src={image_url}
        alt={source_id}
      />
      <ul
        classNameName={ReportCSS.report__list}
      >
        {keywords && keywords.map((word, i) => {
          return (
            <li
              classNameName={ReportCSS.report__item}
              key={i}
            >
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
              >
                {`#${word}`}
              </a>
            </li>
          )
        })}
      </ul> */}
      <div className="card" style={{width: "18rem;"}}>
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
        </div>
        <ul
        className="list-group list-group-flush"
      >
        {keywords && keywords.map((word, i) => {
          return (
            <li
              className="list-group-item"
              key={i}
            >
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
              >
                {`#${word}`}
              </a>
            </li>
          )
        })}
      </ul> 
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#/" target="_blank" rel="noreferrer" className="card-link">Card link</a>
          <a href="#/" target="_blank" rel="noreferrer" className="card-link">Another link</a>
        </div>
      </div>
    </div>
  )
};
