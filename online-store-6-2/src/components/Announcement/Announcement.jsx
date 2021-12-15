import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: #64b2d1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping on Order Over $50
    </Container>
  )
};
