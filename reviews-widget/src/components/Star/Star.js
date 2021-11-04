import React from 'react';
import StarSCSS from './Star.module.scss';

const stars = [5, 4, 3, 2, 1];

export class Star extends React.Component {
  setStar = (starNumber, handleChange) => {
    return (
      <label
        htmlFor={`star-${starNumber}`}
        title={`Star ${starNumber}`}
        className={StarSCSS.rating__label}
        key={starNumber}
      >
        <input
          type="radio"
          id={`star-${starNumber}`}
          name="rating"
          value={starNumber}
          className={StarSCSS.rating__item}
          onChange={handleChange}
          checked={false}
        />  
      </label>
    );
  };

  render() {
    const { handleChange } = this.props;
    return (
      <div className={StarSCSS.rating}>
        <div className={StarSCSS.rating__items}>
          {stars.map(star => (
            this.setStar(star, handleChange)
          ))}
        </div>
      </div>
    );
  }
};
