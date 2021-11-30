import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MovieReviewInfoCSS from './MovieReviewInfo.module.css';

import { movieReviewRequest } from '../../api';

export const MovieReviewInfo = (props) => {
  const [ movieReviewInfo, setMovieReviewInfo ] = useState(null);

  const {
    setSelectMovieId,
    selectMovieId,
  } = props;

  const renderList = (list) => {
    return list.map(element => {
        const elementValues = Object.values(element);

        return (
        <div
          key={elementValues[4]}
          className={MovieReviewInfoCSS.cast}
        >
          <div
            className={MovieReviewInfoCSS.cast__body}
          >
            <div
              className={MovieReviewInfoCSS.cast__name}
            >
              Author: {elementValues[0]}
            </div>
            <div
              className={MovieReviewInfoCSS.cast__character}
            >
              Content: {elementValues[2]}
            </div>
            <div>
              Created at: {elementValues[3]}
            </div>
          </div>
          
        </div>
      )
      });
  };

  useEffect(() => {
    if (selectMovieId) {
      movieReviewRequest(selectMovieId).then(res => {
        setMovieReviewInfo(res.data);
      });
    };
  }, [selectMovieId]);

  return (movieReviewInfo && (
    movieReviewInfo.results.length === 0 
    ? (
      <div
        className={MovieReviewInfoCSS.container__noReviews}
      >
        <div
          className={MovieReviewInfoCSS.card__noReviews}
        >
          <h2>
            No reviews
          </h2>
        </div>
        <Link
          to='/'
          className={MovieReviewInfoCSS.buttonClose}
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={() => {
            setSelectMovieId(null)
          }}
        >
          ×
        </Link>
      </div>
    )
    : (
    <div
      className={MovieReviewInfoCSS.container}
    >
      <div
        className={MovieReviewInfoCSS.card}
      >
        <div className="card-body">
          <h2 className="card-title"> Review </h2>
          {renderList(movieReviewInfo.results)}
        </div>
      </div>
      <Link
        to='/'
        className={MovieReviewInfoCSS.buttonClose}
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={() => {
          setSelectMovieId(null)
        }}
      >
        ×
      </Link>
    </div>
  )))
};

