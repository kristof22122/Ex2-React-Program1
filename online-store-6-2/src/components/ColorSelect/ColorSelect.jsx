import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 10px;
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

export const ColorSelect = (props) => {
  const {
    handleFilter,
    color,
  } = props;

  return (
    <>
      <Select
        name="color"
        onChange={(event) => {
          handleFilter(event)
        }}
        value={color || ''}
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
}
