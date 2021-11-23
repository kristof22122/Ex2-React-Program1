import React from 'react';

import ContactCSS from './Contact.module.css';

export const Contact = (props) => {
  const {
    firstName,
    lastName,
  } = props.contact;

  return (
    <div
      className={ContactCSS.contact}
    >
      <img
        className={ContactCSS.contact__image}
        src="no_avatar.png"
        alt="avatar"
      />
      <div>
        {`${firstName} ${lastName}`}
      </div>
    </div>
  )
}
