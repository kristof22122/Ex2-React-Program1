import React from 'react';
import classNames from 'classnames/bind';

import './SelectComponent.css';

const selectValue = [
  '',
  'white',
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

export const SelectComponent = (props) => {
  const {
    handleChange,
    inputValue,
    invalid,
  } = props;

  return (
    <>
      <select
        className={classNames(
          'selectField',
          {
            invalid: invalid,  
          }
        )}
        name="color"
        onChange={(event) => {
          handleChange(event)
        }}
        value={inputValue || ''}
      >
        {selectValue.map((value, i) => {
          if (value === "") {
            return (
              <option
                className='optionField'
                key={i}
                value=""
              >
                All colors
              </option>
            )
          }

          return (
            <option
              className=''
              key={i}
              value={value}
            >
              {value}
            </option>
          )
        })}
      </select>
    </>
  )
};
