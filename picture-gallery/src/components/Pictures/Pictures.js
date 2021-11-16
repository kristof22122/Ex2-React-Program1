import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';

import PictureCSS from './Pictures.module.css';

export const Pictures = (props) => {
  const {
    pictures,
  } = props;

  const [ showModal, setShowModal ] = useState(false);
  const [ showPictureUrl, setShowPictureUrl ] = useState(null);

  return (
    <div
      className={PictureCSS.wrapper}
    >
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-4">          
          {pictures.map(picture => {
            return (
              <div
                className="col"
                key={picture.id}
                onClick={() => {
                  setShowPictureUrl(picture.largeImageURL);
                  setShowModal(prev => !prev);
                }}
              >
                <div
                  className={PictureCSS.card}
                >
                  <img
                    className={PictureCSS.card__image}
                    src={picture.webformatURL}
                    alt={picture.id}
                  />                  
                </div>
              </div>
            )
          })}
        </div>
        <Modal
          showModal={showModal}
          showPictureUrl={showPictureUrl}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  )
};
