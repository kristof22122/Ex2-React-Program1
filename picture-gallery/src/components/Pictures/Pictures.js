import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';

import PictureCSS from './Pictures.module.css';

export const Pictures = React.memo((props) => {
  const {
    pictures,
  } = props;

  const [ showPictureUrl, setShowPictureUrl ] = useState(null);

  return (
    <div
      className={PictureCSS.wrapper}
    >
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-4">          
          {pictures.map(picture => {
            const {
              webformatURL,
              id,
              largeImageURL,
            } = picture;

            return (
              <div
                className="col"
                key={id}
                onClick={() => {
                  setShowPictureUrl(largeImageURL);
                }}
              >
                <div
                  className={PictureCSS.card}
                >
                  <img
                    className={PictureCSS.card__image}
                    src={webformatURL}
                    alt={id}
                  />                  
                </div>
              </div>
            )
          })}
        </div>
        <Modal
          showPictureUrl={showPictureUrl}
          setShowPictureUrl={setShowPictureUrl}
        />
      </div>
    </div>
  )
});
