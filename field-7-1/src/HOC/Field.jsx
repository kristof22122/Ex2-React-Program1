import React, { useEffect, useState } from 'react';

export const Field = (props) => {
  const [ invalidMessage, setInvalidMessage ] = useState(null);
  const {
    inputValue,
    setInputValue,
    validators,
    renderContent,
  } = props;

  const handleChange = (event) => {
    const {
      value,
    } = event.target;

    setInputValue(value);
  };

  const inputValidation = (validators, value) => {
    const numberOfValidators = validators.length;
    let i = 0;

    while (i < numberOfValidators) {
      const checkValue = validators[i](value);

      if (checkValue !== undefined) {
        setInvalidMessage(checkValue);
        i = numberOfValidators;
      } else {
        setInvalidMessage(null);
      };

      i += 1;
    }
  };

  useEffect(() => {
    inputValidation(validators, inputValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <>
      {renderContent(
        inputValue,
        handleChange,
        (invalidMessage !== null),
      )}
      {invalidMessage && (
        <div>
          {invalidMessage}
        </div>
      )}
    </>
  )
}
