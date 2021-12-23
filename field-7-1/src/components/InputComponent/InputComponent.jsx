import React from 'react';
import styled from 'styled-components';

const ValidInputField = styled.input`
  border-color: ${props => (props.invalid) && (props.invalid ? '#f00' : '#000')};
  background-color: ${props => (props.invalid) && (props.invalid ? '#f00' : '#fff')};
  padding: 10px;
`;

export const InputComponent = (props) => {
  const {
    inputValue,
    handleChange,
    invalid,
  } = props;

  return (
    <>
      <ValidInputField 
        type="text"
        placeholder='Input text'
        invalid={invalid}
        value={inputValue || ''}
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </>
  )
}
