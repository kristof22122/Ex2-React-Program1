import React from 'react';

import ContactsListCSS from './ContactsList.module.css';

import { Contact } from '../Contact/Contact';
import { ModalAddForm } from '../ModalAddForm/ModalAddForm';

export const ContactsList = (props) => {

  const {
    contacts,
    setSelectContact,
    setOpenAddForm,
    openAddForm,
    addContact,
    selectContact,
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
              setOpenAddForm(true);
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
          {openAddForm && (
            <ModalAddForm 
              addContact={addContact}
              setOpenAddForm={setOpenAddForm}
              selectContact={selectContact}
            />
          )}
    </div>
  );
};
