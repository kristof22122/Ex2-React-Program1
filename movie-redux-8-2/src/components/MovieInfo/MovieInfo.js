import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import MovieInfoCSS from './MovieInfo.module.css';

import { actions } from '../../store';
import { selectMovieInfo } from '../../store/movieInfo'

const {
  actionGetMovieInfoFromApi,
} = actions;

export const MovieInfo = () => {
  const dispatch = useDispatch();

  const movieInfo = useSelector(selectMovieInfo);

  const params = useParams();

  const {
    id: movieId
  } = params;

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
      dispatch(actionGetMovieInfoFromApi(movieId));
    };
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
