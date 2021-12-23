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
    let validSize = false;
    let sizeValues = [];

    for (const s in size) {
      if (size[s]) {
        sizeValues = [...sizeValues , s];
        validSize = true;
      }
    }

    let validPrice = false;

    (maxPrice > minPrice) ? validPrice = true : validPrice = false;

    let validName = false;
    let nameToLowerCase;

    if (name !== null) {
      validName = true;
      nameToLowerCase = name.toLowerCase();
    };

    let validColor = false;

    if (color !== null) {
      validColor = true;
    };

    const sortProductAllFilters = productsForFilter.filter(product => {
      const {
        price: productPrice,
        color: productColor,
        size: productSize,
        name: productName,
      } = product;

      if ((validColor && color !== productColor)
          || (validSize && !sizeValues.some(s => s === productSize))
          || (validName && !productName.toLowerCase().includes(nameToLowerCase))
          || (validPrice && !(productPrice >= minPrice && productPrice <= maxPrice))) {
        return false;
      };

      return true;
    });

    return sortProductAllFilters;
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
