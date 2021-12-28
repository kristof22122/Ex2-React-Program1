import React from 'react';
import classNames from 'classnames/bind';

import './InputNumberComponent.css';

export const InputNumberComponent = (props) => {
  const {
    inputValue,
    handleChange,
    invalid,
  } = props;

  return (
    <>
      <input
        className={classNames(
          'inputField',
          {
            invalid: invalid,  
          }
        )}
        type="number"
        placeholder='Input number'
        value={inputValue || ''}
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </>
  )
}
