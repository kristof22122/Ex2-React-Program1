import React from 'react';
import styled from 'styled-components';

const checkBoxValues = [
  'xs',
  's',
  'm',
  'l',
  'xl',
  'xxl',
]

const Container = styled.div`
  padding: 5px;
  display: inline-block;
`;

const CheckBox = styled.input``;

const LabelForCheckBox = styled.label`
  text-transform: uppercase;
`;

export const CheckBoxFilter = (props) => {
  const {
    handleFilter,
    size,
  } = props;

  return (
    <>
      {checkBoxValues.map((value, i) => {
        return (
          <Container
            key={i}
          >
            <CheckBox
              type="checkbox"
              id={value}
              name={value}
              checked={size[value] || false}
              onChange={(event) => {
                handleFilter(event)
              }}
            />
            <LabelForCheckBox
              htmlFor={value}
            >
              {value}
            </LabelForCheckBox>
          </Container>
        )
      })}
    </>
  )
};

export const validSizeValues = [
  'xs',
  's',
  'm',
  'l',
  'xl',
  'xxl',
];

