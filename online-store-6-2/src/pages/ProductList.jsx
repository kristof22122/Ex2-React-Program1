import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Navbar } from '../components/Navbar/Navbar';
import { Announcement } from '../components/Announcement/Announcement';
import { Products } from '../components/Products/Products';
import { Newsletter } from '../components/Newsletter/Newsletter';
import { Footer } from '../components/Footer/Footer';
import { useParams, useSearchParams } from 'react-router-dom';

const Container = styled.div`
`;

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

const Select = styled.select`
  padding: 10px;

`;

const Option = styled.option`

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

  const searchTermColor = searchParams.get('color') || '';
  const searchTermSize = searchParams.get('size') || '';
  const searchTermName = searchParams.get('name') || '';
  const searchTermPrice = searchParams.get('price') || '';

  let min = null;
  let max = null;

  if (searchTermPrice === '') {
    min = ''
    max = ''
  } else {
    min = searchTermPrice.split('-')[0];
    max = searchTermPrice.split('-')[1];
  }

  const [ minPrice, setMinPrice ] = useState(min);
  const [ maxPrice, setMaxPrice ] = useState(max);
  
  const [ filter, setFilter ] = useState({
    color: searchTermColor,
    size: searchTermSize,
    name: searchTermName,
    price: `${minPrice}-${maxPrice}`,
  });

  const params = useParams();
  const {
    category,
  } = params;

  const handleFilter = (event) => {    
    const {
      value,
      name,
    } = event.target;

    if (name === 'minPrice') {
      setMinPrice(value);
      setFilter({
        ...filter,
        price: `${value}-${maxPrice}`,
      });
      return;
    };

    if (name === 'maxPrice') {
      setMaxPrice(value);
      setFilter({
        ...filter,
        price: `${minPrice}-${value}`,
      });
      return;
    };

    setFilter({
      ...filter,
      [name]: value,
    });
  };

  useEffect(() => {
    setSearchParams(filter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

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
          <Select
            name="color"
            onChange={handleFilter}
            value={filter.color || ''}
            // value={searchTermColor}
          >
            <Option
              value=""
            >
              All colors
            </Option>
            <Option
              value="white"
            >
              White
            </Option>
            <Option
              value="black"
            >
              Black
            </Option>
            <Option
              value="red"
            >
              Red
            </Option>
            <Option
              value="blue"
            >
              Blue
            </Option>
            <Option
              value="yellow"
            >
              Yellow
            </Option>
            <Option
              value="green"
            >
              Green
            </Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            filter2
          </FilterText>
          <Select
            name="size"
            value={filter.size || ''}
            // value={searchTermSize}
            onChange={handleFilter}
          >
            <Option
              value=""
            >
              All sizes
            </Option>
            <Option
              value="xs"
            >
              XS
            </Option>
            <Option
              value="s"
            >
              S
            </Option>
            <Option
              value="m"
            >
              M
            </Option>
            <Option
              value="l"
            >
              L
            </Option>
            <Option
              value="xl"
            >
              XL
            </Option>
            <Option
              value="xxl"
            >
              XXL
            </Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            filter3
          </FilterText>
          <Input 
            type="text"
            placeholder="Search name"
            name="name"
            value={filter.name}
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
            value={minPrice}
            onChange={handleFilter}
          />
          -
          <Input 
            type="text"
            placeholder="Max price"
            name="maxPrice"
            value={maxPrice}
            onChange={handleFilter}
          />
        </Filter>
      </FilterContainer>
      <Products
        filters={filter}
      />
      <Newsletter />
      <Footer />
    </Container>
  )
}
