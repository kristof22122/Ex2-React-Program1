import React from 'react';
import { connect } from 'react-redux';

import ContactsListCSS from './ContactsList.module.css';

import { Contact } from '../Contact/Contact';

import { actions as ContactsAction, reselectContacts } from '../../store/contacts';
import { actions as toggleModalFormsAction } from '../../store/toggleModalForms';

import { fieldsLabel } from '../../store';

const {
  addFormLabel,
} = fieldsLabel;

const {
  toggleModalForm,
} = toggleModalFormsAction;

const {
  setSelectContact,
} = ContactsAction;

const ContactsList = (props) => {
  const {
    toggleModalForm,
    setSelectContact,
    contacts,
  } = props;

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
              toggleModalForm(addFormLabel);
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
                  setSelectContact(contact);
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

const mapStateProps = (state) => {
  const contacts = reselectContacts(state);

  return {
    contacts,
  }
};

export default connect(
  mapStateProps,
  {
    toggleModalForm,
    setSelectContact,
  }
)(ContactsList);
