import React from 'react';
import StarSCSS from './Star.module.scss';

export class Star extends React.Component {
  render() {
    const { handleChange, star } = this.props;
    return (
      <>
        <label
          htmlFor={`star-${star}`}
          title={`Star ${star}`}
          className={StarSCSS.rating__label}
          key={star}
        >
          <input
            type="radio"
            id={`star-${star}`}
            name="rating"
            value={star}
            className={StarSCSS.rating__item}
            onChange={handleChange}
            checked={false}
          />
      </label>
      </>
    );
  }
};
