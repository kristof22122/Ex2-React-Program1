import React from 'react';
import { Contact } from '../styles/Contact';
import { ContactImage } from '../styles/ContactImage';
import { ContactBody } from '../styles/ContactBody';
import { ContactName } from '../styles/ContactName';
import { ContactBodyContainer } from '../styles/ContactBodyContainer';
import { ContactStatus } from '../styles/ContactStatus';
import { ContactMessage } from '../styles/ContactMessage';
import { UserImage } from '../styles/UserImage';
import { StatusImage } from '../styles/StatusImage';

export const User = (props) => {
  const {
    id,
    userName,
    lastMessage,
    avatar,
    status,
  } = props.user;

  return (
    <li
      key={id}
    >
      <Contact>
        <ContactImage>
          <UserImage
            src={avatar}
            alt={userName}
          />
          {status && (
            <StatusImage
              src="status.png"
              alt="status"
            />
          )}
        </ContactImage>
        <ContactBody>
          <ContactBodyContainer>
            <ContactName>
              {userName}
            </ContactName>
            <ContactStatus>
              {lastMessage.time}
            </ContactStatus>
          </ContactBodyContainer>
          <ContactMessage>
            {`${lastMessage.author}: ${lastMessage.message}`}
          </ContactMessage>        
        </ContactBody>
      </Contact>
    </li>    
  );
}
