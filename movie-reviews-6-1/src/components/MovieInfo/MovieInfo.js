import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MovieInfoCSS from './MovieInfo.module.css';

import { baseMovieRequest } from '../../api';

export const MovieInfo = (props) => {
  const [ movieInfo, setMovieInfo ] = useState(null);

  const {
    movieId,
  } = props;

  const renderList = (list) => {
    return list.map(element => {
      const elementValues = Object.values(element);

      return (
      <span
        key={elementValues[0]}
      >
        {elementValues[1]}
        {' '}
      </span>
    )
    });
  };

  useEffect(() => {
    if (movieId) {
      baseMovieRequest(movieId).then(res => {
        setMovieInfo(res);
      });
    };
   
  }, [movieId]);

  return (movieInfo && (
    <>
      <div
        className={MovieInfoCSS.card}
      >
        <div className="card-body">
          <h2 className="card-title">Title: {movieInfo.title}</h2>
          <p className="card-text">Overview: {movieInfo.overview}</p>
          <p className="card-text">
            Genres:
            {' '}
            {renderList(movieInfo.genres)}
          </p>
          <p className="card-text">
            Production countries:
            {' '}
            {renderList(movieInfo.production_countries)}
          </p>
          <p className="card-text">Tagline: {movieInfo.tagline}</p>
          <a
            href={movieInfo.homepage}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Homepage
          </a>
        </div>
      </div>
      <Link
        to='/'
        className={MovieInfoCSS.buttonClose}
      >
        Back to trends
      </Link>
    </>
  )) 
};
