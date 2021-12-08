import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import MovieReviewInfoCSS from './MovieReviewInfo.module.css';

import { reviewMovieRequest } from '../../api';

export const MovieReviewInfo = () => {
  const [ movieReviewInfo, setMovieReviewInfo ] = useState([]);

  const params = useParams();

  const {
    id: movieId
  } = params;

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
        setMovieReviewInfo(res.results);
      });
    };
  }, [movieId]);

  return (Array.isArray(movieReviewInfo) && (
    (movieReviewInfo.length === 0) 
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
          {renderList(movieReviewInfo)}
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
