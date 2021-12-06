import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MovieCastInfoCSS from './MovieCastInfo.module.css';

import { baseMovieRequest } from '../../api';

import { img_300, noPicture } from '../../config/config';

export const MovieCastInfo = (props) => {
  const [ movieCastInfo, setMovieCastInfo ] = useState(null);

  const {
    movieId,
  } = props;

  const renderList = (list) => {
    return list.map(element => {
        const elementValues = Object.values(element);
        
        return (
        <div
          key={elementValues[2]}
          className={MovieCastInfoCSS.cast}
        >
          <img
            src={(elementValues[7]) ? img_300 + elementValues[7] : noPicture}
            alt={elementValues[4]}
            className={MovieCastInfoCSS.cast__image}
          />
          <div
            className={MovieCastInfoCSS.cast__body}
          >
            <div
              className={MovieCastInfoCSS.cast__name}
            >
              Name: {elementValues[4]}
            </div>
            <div
              className={MovieCastInfoCSS.cast__character}
            >
              Character: {elementValues[9]}
            </div>
          </div>
          
        </div>
      )
      });
  };

  useEffect(() => {
    if (movieId) {
      baseMovieRequest(movieId, '/credits').then(res => {
        setMovieCastInfo(res);
      });
    };
   
  }, [movieId]);

  return (movieCastInfo && (

    <>
      <div
        className={MovieCastInfoCSS.card}
      >
        <div className="card-body">
          <h2 className="card-title"> Cast </h2>
          {renderList(movieCastInfo.cast)}
        </div>
      </div>
      <Link
        to='/'
        className={MovieCastInfoCSS.buttonClose}
      >
        Back to trends
      </Link>
    </>
  )) 
};

