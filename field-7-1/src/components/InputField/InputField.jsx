import React, { useState } from 'react';
import { Field } from '../../HOC/Field';
import { InputComponent } from '../InputComponent/InputComponent';

import { validators } from '../../HOC/validators';

export const InputField = () => {
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
          <InputComponent 
            inputValue={inputValue}
            handleChange={handleChange}
            invalid={invalid}
          />
        )}
      />
    </div>
  )
};
