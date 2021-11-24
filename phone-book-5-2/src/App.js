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
      let updateContactInfo = null;

      const copyContacts = contacts.map(contact => {
        const {
          id: contactId,
        } = contact;

        if (contactId === selectContact.id) {
          updateContactInfo = {
            id: contactId,
            firstName: firstNameField,
            lastName: lastNameField,
            phone: phoneField,
          };

          return updateContactInfo;
        };

        return contact;
      });

      requestUpdate(updateContactInfo);
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

  const handleSelectContact = useCallback((contact) => {
    setSelectContact(contact);
  }, []);

  useEffect(() => {
    requestRead().then(contactsFromAPI => {
      const {
        records,
      } = contactsFromAPI;

      setContacts(records);
    });
  }, []);

  return (
    <div className={AppCSS.App}>
      {!selectContact && (
        <ContactsList
          contacts={contacts}
          setSelectContact={setSelectContact}
          toggleAddModal={toggleAddModal}

        />
      )}
      {selectContact && (
        <ContactInfo 
          selectContact={selectContact}
          deleteContact={deleteContact}

          toggleAddModal={toggleAddModal}
          handleSelectContact={handleSelectContact}
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
