import React from 'react';
import classNames from 'classnames/bind';

import './InputComponent.css';

export const InputComponent = (props) => {
  const {
    inputValue,
    handleChange,
    invalid,
  } = props;

  return (
    <input
      className={classNames(
        'inputField',
        {
          invalid,  
        }
      )}
      type="text"
      placeholder='Input text'
      value={inputValue || ''}
      onChange={handleChange}
    />
  )
}
