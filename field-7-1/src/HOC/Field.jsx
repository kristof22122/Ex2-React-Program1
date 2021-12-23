import React, { useEffect, useState } from 'react';


export const Field = (props) => {
  const [ invalid, setInvalid ] = useState(false);
  const [ invalidMessage, setInvalidMessage ] = useState(null);
  const {
    inputValue,
    handleChange,
    validators,
    renderContent,
  } = props;

  useEffect(() => {
    if (!Array.isArray(inputValue)) {
      for (const validator of validators) {
        const checkValue = validator(inputValue);

        if (checkValue !== undefined) {
          setInvalid(true);
          setInvalidMessage(checkValue);
          return;
        } else {
          setInvalid(false);
          setInvalidMessage(null);
        }
      };
    } else {
      for (const value of inputValue) {
        const valueKeys = Object.keys(value);

        for (const key of valueKeys) {
          for (const validator of validators) {
            const checkValue = validator(value[key]);

            if (checkValue !== undefined) {
              setInvalid(true);
              setInvalidMessage(checkValue);
              return;
            } else {
              setInvalid(false);
              setInvalidMessage(null);
            };
          };
        };
      };
    };
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <>
      {renderContent(inputValue, handleChange, invalid)}
      {invalidMessage && (
        <div>
          {invalidMessage}
        </div>
      )}
      
    </>
  )
}
