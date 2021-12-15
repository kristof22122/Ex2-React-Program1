import React from 'react';
import styled from 'styled-components';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h2`
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          Test Shop
        </Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur nemo dolore nam velit aliquam asperiores corporis illum sapiente reiciendis suscipit placeat, impedit voluptate dicta! Aspernatur voluptatibus commodi earum dolores!
        </Desc>
        <SocialContainer>
          <SocialIcon
            color="3b5999"
          >
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon
            color="e4405f"
          >
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon
            color="55acee"
          >
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon
            color="e60023"
          >
            <TelegramIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>
          Useful Links
        </Title>
        <List>
          <ListItem>
            Home
          </ListItem>
          <ListItem>
            Cart
          </ListItem>
          <ListItem>
            Man Fashion
          </ListItem>
          <ListItem>
            Woman Fashion
          </ListItem>
          <ListItem>
            Accessories
          </ListItem>
          <ListItem>
            My Account
          </ListItem>
          <ListItem>
            Order Tracking
          </ListItem>
          <ListItem>
            Wishlist
          </ListItem>
          <ListItem>
            Terms
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>
          Contact
        </Title>
        <ContactItem>
          <RoomIcon 
            style={{marginRight: "10px"}}
          />
          test address
        </ContactItem>
        <ContactItem>
          <PhoneIcon
            style={{marginRight: "10px"}}
          />
          +1 234 56 789
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon
            style={{marginRight: "10px"}}
          />
          test@mail.com
        </ContactItem>
        <Payment
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="payment"
        />
      </Right>
    </Container>
  )
}
