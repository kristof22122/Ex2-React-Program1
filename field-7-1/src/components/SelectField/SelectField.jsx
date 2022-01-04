import React, { useState } from 'react';
import { Field } from '../../HOC/Field';
import { SelectComponent } from '../SelectComponent/SelectComponent';

import { validators } from '../../HOC/validators';

export const SelectField = () => {
  const [ inputValue, setInputValue ] = useState(null);

  return (
    <Field 
      inputValue={inputValue}
      setInputValue={setInputValue}
      validators={validators}
      renderContent={SelectComponent}
    />
  )
};
