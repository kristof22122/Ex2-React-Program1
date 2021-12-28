import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useParams, useSearchParams } from 'react-router-dom';

import { Navbar } from '../components/Navbar/Navbar';
import { Announcement } from '../components/Announcement/Announcement';
import { Products } from '../components/Products/Products';
import { Newsletter } from '../components/Newsletter/Newsletter';
import { Footer } from '../components/Footer/Footer';
import { ColorSelect, validColorValues } from '../components/ColorSelect/ColorSelect';
import { CheckBoxFilter, checkBoxValues } from '../components/CheckBoxFilter/CheckBoxFilter';


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
  const [ filters, setFilters ] = useState(() => {
    const searchTermColor = searchParams.get('color') || null;
    const searchTermSize = searchParams.get('size') || null;
    const searchTermName = searchParams.get('name') || null;
    const searchTermPrice = searchParams.get('price') || null;

    let minFromUrl = null;
    let maxFromUrl = null;

    if (searchTermPrice !== null) {
      const [
        minPriceFromUrl,
        maxPriceFromUrl,
      ] = searchTermPrice.split('-');

      const minPriceFromUrlNumber = +minPriceFromUrl;
      const maxPriceFromUrlNumber = +maxPriceFromUrl;

      if (minPriceFromUrlNumber <= maxPriceFromUrlNumber) {
        minFromUrl = minPriceFromUrlNumber;
        maxFromUrl = maxPriceFromUrlNumber;
      }
    }

    let sizeFromUrl = [];

    if (searchTermSize !== null) {
      const searchTermSizeValue = searchTermSize.split(',');

      for ( const sizeValue of searchTermSizeValue) {
        if (checkBoxValues.some(validSize => validSize === sizeValue)) {
          sizeFromUrl = [...sizeFromUrl, sizeValue];
        }
      };
    } 

    let colorFromUrl = null;

    if (validColorValues.some(validColor => validColor === searchTermColor)) {
      colorFromUrl = searchTermColor;
    }

    return {
      color: colorFromUrl,
      size: sizeFromUrl,
      name: searchTermName,
      minPrice: minFromUrl,
      maxPrice: maxFromUrl,
    }
  });

  const params = useParams();
  const {
    category,
  } = params;

  const handleFilter = (event) => {
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
      const {
        size,
      } = filters;

      setFilters({
        ...filters,
        size: checked ? [ ...size, name ] : size.filter(s => s !== name),
      });
      return;
    }

    const filterValue = value === '' ? null : value

    setFilters({
      ...filters,
      [name]: filterValue,
    });
  };

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
    
    for (const s of size) {
      if (s) {
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
            color={filters.color}
          />
        </Filter>
        <Filter>
          <FilterText>
            filter2
          </FilterText>
          <CheckBoxFilter
            handleFilter={handleFilter}
            size={filters.size}
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
