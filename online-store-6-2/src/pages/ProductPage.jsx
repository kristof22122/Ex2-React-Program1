import React from 'react';
import styled from 'styled-components';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { Announcement } from '../components/Announcement/Announcement';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import { Newsletter } from '../components/Newsletter/Newsletter';

const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h2`
  font-weight: 200; 
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #${props => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #64b2d1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #64b2d1;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  text-transform: uppercase;

  &:hover {
    background-color: #f8f4f4;
  }
`;

export const ProductPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image 
            src="https://i.ibb.co/S6qMxwr/jean.jpg/"
            alt="productImage"
          />
        </ImageContainer>
        <InfoContainer>
          <Title>
            Denim Jumpsuit
          </Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, facilis eius? Incidunt numquam tempore qui, voluptatem repellat placeat corrupti iusto, dignissimos quidem eveniet enim, quod ut praesentium nihil omnis laboriosam.  
          </Desc>
          <Price>
            $ 20
          </Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>
                Color
              </FilterTitle>
              <FilterColor 
                color="000"
              />
              <FilterColor
                color="1c2e4a"
              />
              <FilterColor 
                color="808080"
              />
            </Filter>
            <Filter>
              <FilterTitle>
                Size
              </FilterTitle>
              <FilterSize>
                <FilterSizeOption>
                  XS
                </FilterSizeOption>
                <FilterSizeOption>
                  S
                </FilterSizeOption>
                <FilterSizeOption>
                  M
                </FilterSizeOption>
                <FilterSizeOption>
                  L
                </FilterSizeOption>
                <FilterSizeOption>
                  XL
                </FilterSizeOption>
                <FilterSizeOption>
                  XXL
                </FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>
                1
              </Amount>
              <AddIcon />
            </AmountContainer>
            <Button>
              Add to cart
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}
