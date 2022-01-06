import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactsListCSS from './ContactsList.module.css';

import { Contact } from '../Contact/Contact';

import { getContacts } from '../../store';
import { actions as selectContactAction } from '../../store/selectContact';

export const ContactsList = (props) => {
  const dispatch = useDispatch();
  const {
    select,
  } = selectContactAction;

  const {
    toggleAddModal,
  } = props;

  const contacts = useSelector(getContacts);

  return (
    <div
      className={ContactsListCSS.contacts}
    >
        <h1
          className={ContactsListCSS.contacts__title}
        >
          Phone book
        </h1>
        <div
          className={ContactsListCSS.contacts__button}
        >
          <button 
            type="button"
            className="btn btn-primary"
            onClick={() => {
              toggleAddModal();
            }}
          >
            Add contact
          </button>
        </div>
        <div
          className={ContactsListCSS.contacts__list}
        >
          {contacts.map(contact => {
            const {
              id,
            } = contact;

            return (
              <div
                key={id}
                className={ContactsListCSS.contact}
                onClick={() => {
                  dispatch(select(contact));
                }}
              >
                <Contact
                  contact={contact}
                />
              </div>
            )
          })}
        </div>
    </div>
  );
};
