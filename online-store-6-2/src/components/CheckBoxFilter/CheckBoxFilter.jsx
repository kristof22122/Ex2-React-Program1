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
    filters
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
              checked={filters.size[value]}
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
       {/* <CheckBox
            type="checkbox"
            id="xs"
            name="xs"
            checked={filters.size.xs}
            onChange={handleFilter}
          />
          <LabelForCheckBox
            htmlFor="xs"
          >
            xs
          </LabelForCheckBox>
          <CheckBox
            type="checkbox"
            id="s"
            name="s"
            checked={filters.size.s}
            onChange={handleFilter}
          />
          <LabelForCheckBox
            htmlFor="s"
          >
            s
          </LabelForCheckBox>
          <CheckBox
            type="checkbox"
            id="m"
            name="m"
            checked={filters.size.m}
            onChange={handleFilter}
          />
          <LabelForCheckBox
            htmlFor="m"
          >
            m
          </LabelForCheckBox>
          <CheckBox
            type="checkbox"
            id="l"
            name="l"
            checked={filters.size.l}
            onChange={handleFilter}
          />
          <LabelForCheckBox
            htmlFor="l"
          >
            l
          </LabelForCheckBox>
          <CheckBox
            type="checkbox"
            id="xl"
            name="xl"
            checked={filters.size.xl}
            onChange={handleFilter}
          />
          <LabelForCheckBox
            htmlFor="xl"
          >
            xl
          </LabelForCheckBox>
          <CheckBox
            type="checkbox"
            id="xxl"
            name="xxl"
            checked={filters.size.xxl}
            onChange={handleFilter}
          />
          <LabelForCheckBox
            htmlFor="xxl"
          >
            xxl
          </LabelForCheckBox> */}
    </>
  )
}
