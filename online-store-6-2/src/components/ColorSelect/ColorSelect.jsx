import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 10px;
`;

const Option = styled.option`
  text-transform: capitalize;
`;

export const selectValue = [
  'white',
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

export const ColorSelect = (props) => {
  const {
    handleFilter,
    color,
  } = props;

  return (
    <>
      <Select
        name="color"
        onChange={handleFilter}
        value={color || ''}
      >
        <Option
          value=""
        >
          All colors
        </Option>
        {selectValue.map((value, i) => {
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
