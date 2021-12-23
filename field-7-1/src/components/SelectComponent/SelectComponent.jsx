import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 10px;
  border-color: ${props => (props.invalid) && (props.invalid ? '#f00' : '#000')};
  background-color: ${props => (props.invalid) && (props.invalid ? '#f00' : '#fff')};
`;

const Option = styled.option`
  text-transform: capitalize;
`;

const selectValue = [
  '',
  'white',
  'black',
  'red',
  'blue',
  'yellow',
  'green',
]

export const SelectComponent = (props) => {
  const {
    handleChange,
    inputValue,
    invalid,
  } = props;

  return (
    <>
      <Select
        name="color"
        invalid={invalid}
        onChange={(event) => {
          handleChange(event)
        }}
        value={inputValue || ''}
      >
        {selectValue.map((value, i) => {
          if (value === "") {
            return (
              <Option
                key={i}
                value=""
              >
                All colors
              </Option>
            )
          }

          return (
            <Option
              key={i}
              value={value}
            >
              {value}
            </Option>
          )
        })}
      </Select>
    </>
  )
};
