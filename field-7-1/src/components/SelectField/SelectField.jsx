import React, { useState } from 'react';
import { Field } from '../../HOC/Field';
import { SelectComponent } from '../SelectComponent/SelectComponent';

import { validators } from '../../HOC/validators';

export const SelectField = () => {
  const [ inputValue, setInputValue ] = useState(null);

  const handleChange = (event) => {
    const {
      value,
    } = event.target;

    setInputValue(value);
  };

  return (
    <div>
      <Field 
        inputValue={inputValue}
        handleChange={handleChange}
        validators={validators}
        renderContent={(inputValue, handleChange, invalid) => (
          <SelectComponent 
            inputValue={inputValue}
            handleChange={handleChange}
            invalid={invalid}
          />
        )}
      />
    </div>
  )
};
