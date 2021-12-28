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
    for (const validator of validators) {
      const checkValue = validator(value);

      if (checkValue !== undefined) {
        setInvalidMessage(checkValue);
        return;
      } else {
        setInvalidMessage(null);
      }
    };
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
        (invalidMessage !== null
          ? true 
          : false
        ),
      )}
      {invalidMessage && (
        <div>
          {invalidMessage}
        </div>
      )}
    </>
  )
}
