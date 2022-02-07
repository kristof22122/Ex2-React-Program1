import React from 'react';
import { connect } from 'react-redux';

import ContactsListCSS from './ContactsList.module.css';

import { Contact } from '../Contact/Contact';

import { actions as selectContactAction } from '../../store/selectContact';
import { actions as openAddFormAction } from '../../store/openAddForm';

const {
  toggle: toggleAddFormAction,
} = openAddFormAction;

const {
  setSelectContact,
} = selectContactAction;

const ContactsList = (props) => {
  const {
    toggleAddFormAction,
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
              toggleAddFormAction();
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
  return {
    contacts: state.contacts,
  }
};

const mapDispatchToProps = () => {
  return {
    toggleAddFormAction,
    setSelectContact,
  }
};

export default connect(mapStateProps, mapDispatchToProps())(ContactsList);
