import React from 'react';
import StarSCSS from './Star.module.scss';

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
    const { handleChange, star } = this.props;
    return (
      <>
        {this.setStar(star, handleChange)}        
      </>
    );
  }
};
