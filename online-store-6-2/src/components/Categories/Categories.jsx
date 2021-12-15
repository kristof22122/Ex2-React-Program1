import React from 'react';
import styled from 'styled-components';

import { categories } from '../../data';
import { CategoryItem } from '../CategoryItem/CategoryItem';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map(item => {
        return (
          <CategoryItem
            key={item.id}
            item={item}
          />
        )
      })}
    </Container>
  )
}
