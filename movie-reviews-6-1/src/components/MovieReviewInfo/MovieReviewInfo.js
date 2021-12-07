import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MovieReviewInfoCSS from './MovieReviewInfo.module.css';

import { reviewMovieRequest } from '../../api';

export const MovieReviewInfo = (props) => {
  const [ movieReviewInfo, setMovieReviewInfo ] = useState(null);
  const [ checkReviewsIsArray, setCheckReviewsIsArray ] = useState(false);

  const {
    movieId,
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
    if (movieId) {
      reviewMovieRequest(movieId).then(res => {
        setMovieReviewInfo(res);

        (Array.isArray(res.results)) 
          ? setCheckReviewsIsArray(true)
          : setCheckReviewsIsArray(false);
      });
    };
  }, [movieId]);

  return (checkReviewsIsArray && (
    (movieReviewInfo.results.length === 0) 
    ? (
      <>
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
        >
          Back to trends
        </Link>
      </>
    )
    : (
    <>
      <div
        className={MovieReviewInfoCSS.card}
      >
        <div className={MovieReviewInfoCSS.card__body}>
          <h2 className="card-title"> Review </h2>
          {renderList(movieReviewInfo.results)}
        </div>
      </div>
      <Link
        to='/'
        className={MovieReviewInfoCSS.buttonClose}
      >
        Back to trends
      </Link>
    </>
  )))
};
