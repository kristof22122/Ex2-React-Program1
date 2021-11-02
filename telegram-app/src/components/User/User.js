import React from 'react';
import { Contact } from '../styles/Contact';
import { ContactImage } from '../styles/ContactImage';
import { ContactBody } from '../styles/ContactBody';
import { ContactName } from '../styles/ContactName';
import { ContactBodyContainer } from '../styles/ContactBodyContainer';
import { ContactStatus } from '../styles/ContactStatus';
import { ContactMessage } from '../styles/ContactMessage';
import { UserImage } from '../styles/UserImage';

export const User = (props) => {
  const {
    userName,
    lastMessage,
    avatar,
    status,
  } = props.user;

  return (
    <Contact>
      <ContactImage>
        <UserImage
          src={avatar}
          alt={userName}
        />
      </ContactImage>
      <ContactBody>
        <ContactBodyContainer>
          <ContactName>
            {userName}
          </ContactName>
          <ContactStatus>
            {status ? 'online' : 'offline'}
          </ContactStatus>
        </ContactBodyContainer>
        <ContactMessage>
          {lastMessage}
        </ContactMessage>        
      </ContactBody>
    </Contact>
  );
}
