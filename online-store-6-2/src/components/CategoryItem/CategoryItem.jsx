import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: #9c9c9c;
  cursor: pointer;
`;

export const CategoryItem = (props) => {
  const {
    id,
    img,
    title,
    cat,
  } = props.item;

  return (
    <Container>
      <Link
        to={`/products/${cat}`}
      >
        <Image
          src = {img}
          alt = {id}
        />
        <Info>
          <Title>
            {title}
          </Title>
          <Button>
            Shop Now
          </Button>
        </Info>
      </Link>
    </Container>
  )
}
