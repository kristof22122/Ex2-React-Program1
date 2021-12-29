import React, { useState } from 'react';
import { Field } from '../../HOC/Field';
import { InputNumberComponent } from '../InputNumberComponent/InputNumberComponent';

import { validators } from '../../HOC/validators';

export const InputNumberField = () => {
  const [ inputValue, setInputValue ] = useState(null);

  return (
    <Field 
      inputValue={inputValue}
      setInputValue={setInputValue}
      validators={validators}
      renderContent={(inputValue, handleChange, invalid) => (
        <InputNumberComponent 
          inputValue={inputValue}
          handleChange={handleChange}
          invalid={invalid}
        />
      )}
    />
  )
};
