import React from 'react';
import styled from 'styled-components';

import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e3eff8;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  border: none;
  flex: 1;
  background-color: #64b2d1;
  color: #fff;
`;

export const Newsletter = () => {
  return (
    <Container>
      <Title>
        Newsletter
      </Title>
      <Description>
        Get timely updates from your favorite products.
      </Description>
      <InputContainer>
        <Input
          placeholder='Your email'
        />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  )
}
