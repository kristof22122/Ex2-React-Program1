import React, { useState, useEffect, useCallback } from 'react';
import AppCSS from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { requestRead, requestCreate, requestDelete, requestUpdate } from './api';

import { ContactsList } from './components/ContactsList/ContactsList';
import { ContactInfo } from './components/ContactInfo/ContactInfo';

import { ModalAddForm } from './components/ModalAddForm/ModalAddForm';

function App() {
  const [ contacts, setContacts ] = useState([]);
  const [ selectContact, setSelectContact ] = useState(null);
  const [ openAddForm, setOpenAddForm ] = useState(false);

  const addContact = useCallback((firstNameField, lastNameField, phoneField) => {
    if (selectContact !== null) {
      const {
        id: selectContactId,
      } = selectContact;

      const copyContacts = contacts.map(contact => {
        const {
          id: contactId,
        } = contact;

        if (contactId === selectContactId) {
          const updateContactInfo = {
            id: contactId,
            firstName: firstNameField,
            lastName: lastNameField,
            phone: phoneField,
          };

          return updateContactInfo;
        };

        return contact;
      });

      const updateContactInfoForRequest = {
        id: selectContactId,
        firstName: firstNameField,
        lastName: lastNameField,
        phone: phoneField,
      };

      requestUpdate(updateContactInfoForRequest);
      setContacts([...copyContacts]);
      setSelectContact(null);
      return;
    };

    const id = (+new Date()).toString();
    const newContact = {
      id,
      firstName: firstNameField,
      lastName: lastNameField,
      phone: phoneField,
    };

    requestCreate(newContact);
    setContacts([...contacts, newContact]);
  }, [contacts, selectContact]);

  const deleteContact = useCallback((contactId) => {

    const copyContacts = contacts.filter(contact => contact.id !== contactId);

    setContacts([...copyContacts]);

    requestDelete(contactId);
  }, [contacts]);

  const toggleAddModal = useCallback(() => {
    setOpenAddForm((current) => !current);
  }, []);

  useEffect(() => {
    requestRead().then(contactsFromAPI => {
      const {
        records,
      } = contactsFromAPI;

      setContacts(records);
    });
  }, []);

  useEffect(() => {

  }, []);

  return (
    <div className={AppCSS.App}>
      {!selectContact && (
        <ContactsList
          contacts={contacts}
          toggleAddModal={toggleAddModal}
          setSelectContact={setSelectContact}

        />
      )}
      {selectContact && (
        <ContactInfo 
          selectContact={selectContact}
          deleteContact={deleteContact}

          toggleAddModal={toggleAddModal}
          setSelectContact={setSelectContact}
        />
      )}
      {openAddForm && (
        <ModalAddForm 
          addContact={addContact}
          selectContact={selectContact}
          toggleAddModal={toggleAddModal}
        />
      )}
    </div>
  );
}

export default App;
