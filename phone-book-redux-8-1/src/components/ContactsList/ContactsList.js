import React from 'react';
import { connect } from 'react-redux';

import ContactsListCSS from './ContactsList.module.css';

import { Contact } from '../Contact/Contact';

// import { actions as openAddFormAction } from '../../store/openAddForm';
import { actions as ContactsAction } from '../../store/contacts';
import { actions as toggleModalFormsAction } from '../../store/toggleModalForms';
// const {
//   toggle: toggleAddFormAction,
// } = openAddFormAction;

const {
  toggleModalForm,
} = toggleModalFormsAction;

const {
  setSelectContact,
} = ContactsAction;

const ContactsList = (props) => {
  const {
    // toggleAddFormAction,
    toggleModalForm,
    setSelectContact,
    contactsValues,
  } = props;

  const {
    contacts,
  } = contactsValues;

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
              toggleModalForm('addForm');
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
    contactsValues: state.contactsValues,
  }
};

const mapDispatchToProps = () => {
  return {
    // toggleAddFormAction,
    toggleModalForm,
    setSelectContact,
  }
};

export default connect(mapStateProps, mapDispatchToProps())(ContactsList);
