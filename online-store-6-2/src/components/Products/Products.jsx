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
    let sizeValues = []

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
    }

    const sortProductsColor = color === null ? [ ...productsForFilter ] : productsForFilter.filter(product => product.color === color);

    const sortProductsSize = validSize 
    ? sortProductsColor.filter(product => {
      return sizeValues.some(s => s === product.size);
    }) 
    : [ ...sortProductsColor];


    const sortProductsName = validName ? sortProductsSize.filter(product => product.name.toLowerCase().includes(nameToLowerCase)) : [...sortProductsSize];

    const sortProductsPrice = validPrice 
    ? sortProductsName.filter(product => {
        const {
          price,
        } = product;

        return price >= minPrice && price <= maxPrice;
      })
    : [ ...sortProductsName ];

    return sortProductsPrice;
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
