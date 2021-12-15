import React, { useEffect, useState } from 'react';
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
  const [ visibleProducts, setVisibleProducts ] = useState([])
  const {
    filters,
  } = props;

  const {
    color,
    size,
    name,
    price,
  } = filters;

  useEffect(() => {
    const minPrice = +price.split('-')[0];
    const maxPrice = +price.split('-')[1];

    console.log(minPrice, maxPrice);

    let valid = false;

    (minPrice >= 0 && maxPrice >= 0 && maxPrice > minPrice) ? valid = true : valid = false;
    
    const products = [...productsFromServer];

    const sortProductsColor = color === '' ? [ ...products ] : products.filter(product => product.color === color);
    const sortProductsSize = size === '' ? [ ...sortProductsColor] : sortProductsColor.filter(product => product.size === size);
    const sortProductsName = sortProductsSize.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));

    let sortProductsPrice;

    if (valid) {
      sortProductsPrice = sortProductsName.filter(product => {
        const {
          price,
        } = product;
        return +price >= minPrice && +price <= maxPrice;
      });
    } else {
      sortProductsPrice = [ ...sortProductsName ];
    };

    setVisibleProducts(sortProductsPrice);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <Container>
      {visibleProducts.map(item => (
        <Product
          key={item.id}
          item={item}
        />
      ))}
    </Container>
  )
}
