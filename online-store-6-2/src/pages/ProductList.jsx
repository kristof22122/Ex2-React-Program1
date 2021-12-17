import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useParams, useSearchParams } from 'react-router-dom';

import { Navbar } from '../components/Navbar/Navbar';
import { Announcement } from '../components/Announcement/Announcement';
import { Products } from '../components/Products/Products';
import { Newsletter } from '../components/Newsletter/Newsletter';
import { Footer } from '../components/Footer/Footer';
import { ColorSelect } from '../components/ColorSelect/ColorSelect';
import { CheckBoxFilter } from '../components/CheckBoxFilter/CheckBoxFilter';


const Container = styled.div``;

const Title = styled.h2`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

export const ProductList = () => {
  const [ searchParams, setSearchParams ] = useSearchParams();

  const searchTermColor = searchParams.get('color') || null;
  const searchTermSize = searchParams.get('size') || null;
  const searchTermName = searchParams.get('name') || null;
  const searchTermPrice = searchParams.get('price') || null;

  let min = null;
  let max = null;
  const sizeFromUrl = {
    xs: false,
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
  };

  if (searchTermPrice !== null) {
    min = searchTermPrice.split('-')[0];
    max = searchTermPrice.split('-')[1];
  }

  if (searchTermSize !== null) {
    const searchTermSizeValue = searchTermSize.split(',');

    for ( const sizeValue of searchTermSizeValue) {
      sizeFromUrl[sizeValue] = true;
    };
  };
  
  const [ filters, setFilters ] = useState({
    color: searchTermColor,
    size: sizeFromUrl,
    name: searchTermName,
    minPrice: min,
    maxPrice: max,
  });

  const params = useParams();
  const {
    category,
  } = params;

  const handleFilter =(
    (event) => {    
      const {
        value,
        name,
        checked,
        type,
      } = event.target;
  
      if (name === 'minPrice') {
        const numValue = Number(value);
  
        if (!isNaN(numValue)){
          setFilters({
            ...filters,
            minPrice: numValue,
          });
        }
        
        return;
      };
  
      if (name === 'maxPrice') {
        const numValue = Number(value);
  
        if (!isNaN(numValue)) {
          setFilters({
            ...filters,
            maxPrice: numValue,
          });
        }
        return;
      };
  
      if (type === 'checkbox') {
        setFilters({
          ...filters,
          size: {
            ...filters.size,
            [name]: checked,
          }
        });
        return;
      }
  
      const filterValue = value === '' ? null : value
  
      setFilters({
        ...filters,
        [name]: filterValue,
      });
    });

  useEffect(() => {
    const params = {};
    const {
      minPrice,
      maxPrice,
      size,
    } = filters;

    for (const i in filters) {
      if (filters[i] !== null && (i !== 'minPrice') && (i !== 'maxPrice') && (i !== 'size')) {
        params[i] = filters[i];
      }
    }

    let sizeValues = [];

    for (const s in size) {
      if (size[s]) {
        sizeValues = [...sizeValues , s];
      }
    }

    const sizeValueForParam = sizeValues.join(',');

    if (sizeValueForParam !== '') {
      params.size = sizeValueForParam;
    }

    if (minPrice !== null && maxPrice !== null && minPrice < maxPrice) {
      params.price = `${minPrice}-${maxPrice}`;
    }

    setSearchParams(params);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>
        {category ? category : 'All category'}
      </Title>
      <FilterContainer>
        <Filter>
          <FilterText>
            filter1
          </FilterText>
          <ColorSelect
            handleFilter={handleFilter}
            filters={filters}
          />
        </Filter>
        <Filter>
          <FilterText>
            filter2
          </FilterText>
          <CheckBoxFilter
            handleFilter={handleFilter}
            filters={filters}
          />
        </Filter>
        <Filter>
          <FilterText>
            filter3
          </FilterText>
          <Input 
            type="text"
            placeholder="Search name"
            name="name"
            value={filters.name || ''}
            onChange={handleFilter}
          />
        </Filter>
        <Filter>
          <FilterText>
            filter4
          </FilterText>
          <Input 
            type="text"
            placeholder="Min price"
            name="minPrice"
            value={filters.minPrice || ''}
            onChange={handleFilter}
          />
          -
          <Input 
            type="text"
            placeholder="Max price"
            name="maxPrice"
            value={filters.maxPrice || ''}
            onChange={handleFilter}
          />
        </Filter>
      </FilterContainer>
      <Products
        filters={filters}
      />
      <Newsletter />
      <Footer />
    </Container>
  )
}
