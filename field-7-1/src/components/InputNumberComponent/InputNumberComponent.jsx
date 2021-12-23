import React from 'react';
import styled from 'styled-components';

const ValidInputField = styled.input`
  border-color: ${props => (props.invalid) && (props.invalid ? '#f00' : '#000')};
  background-color: ${props => (props.invalid) && (props.invalid ? '#f00' : '#fff')};
  padding: 10px;
`;

export const InputNumberComponent = (props) => {
  const {
    inputValue,
    handleChange,
    invalid,
  } = props;

  return (
    <>
      <ValidInputField 
        type="number"
        placeholder='Input number'
        invalid={invalid}
        value={inputValue || ''}
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </>
  )
}
