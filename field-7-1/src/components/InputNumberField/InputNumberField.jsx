import React, { useState } from 'react';
import { Field } from '../../HOC/Field';
import { InputNumberComponent } from '../InputNumberComponent/InputNumberComponent';

import { validators } from '../../HOC/validators';

export const InputNumberField = () => {
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
          <InputNumberComponent 
            inputValue={inputValue}
            handleChange={handleChange}
            invalid={invalid}
          />
        )}
      />
    </div>
  )
};
