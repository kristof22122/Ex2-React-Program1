import React from 'react';
import styled from 'styled-components';

import { Product } from '../Product/Product';

import { productsFromServer } from '../../data';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = (props) => {
  const {
    color,
    size,
    name,
    minPrice,
    maxPrice,
  } = props.filters;

  const filterProducts = (productsForFilter) => {
    let nameToLowerCase;

    if (name !== null) {
      nameToLowerCase = name.toLowerCase();
    };

    return productsForFilter.filter(product => {
      const {
        price: productPrice,
        color: productColor,
        size: productSize,
        name: productName,
      } = product;

      return !((color !== null && color !== productColor)
        || (size.length !== 0 ? !size.some(s => s === productSize) : false)
        || (name !== null && !productName.toLowerCase().includes(nameToLowerCase))
        || ((maxPrice > minPrice) && !(productPrice >= minPrice && productPrice <= maxPrice)));
    });
  };

  return (
    <Container>
      {filterProducts(productsFromServer).map(item => (
        <Product
          key={item.id}
          item={item}
        />
      ))}
    </Container>
  )
}
