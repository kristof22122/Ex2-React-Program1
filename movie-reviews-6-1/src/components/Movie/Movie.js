import React from 'react';

import MovieCSS from './Movie.module.css';

import { img_300 } from '../../config/config';

import { Link } from 'react-router-dom';

export const Movie = (props) => {
  const {
    movie,
  } = props;

  const {
    id,
    title,
    poster_path,
    overview,
  } = movie;
  
  return (
    <div
      className="card"
    >
      <img
        className="card-img-top"
        src={img_300 + poster_path}
        alt={title}
      />
      <div
        className="card-body"
      >
        <div
          className={MovieCSS.title__wrapper}
        >
          <h5
            className="card-title"
          >
            {(title.length < 50) ? title : title.slice(0, 40) + '...'}
          </h5>
        </div>
        <div
          className={MovieCSS.overview__wrapper}
        >
          <p
            className="card-text"
          >
            {(overview.length < 100) ? overview : overview.slice(0, 100) + '...'}
          </p>
        </div>
        <div
          className={MovieCSS.overview__link}
        >
          <p
            className="card-text"
          >
            <Link
              className={MovieCSS.link}
              to={`/movies/${id}`}
            >
              Movie detail
            </Link>
            <br/>
            <Link
              className={MovieCSS.link}
              to={`/movies/${id}/cast`}
            >
              Movie cast detail
            </Link>
            <br/>
            <Link
              className={MovieCSS.link}
              to={`/movies/${id}/review`}
            >
              Movie review detail
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
};
