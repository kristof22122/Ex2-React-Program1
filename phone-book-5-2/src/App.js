import React, { useState, useEffect, useCallback } from 'react';
import AppCSS from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { requestRead, requestCreate, requestDelete, requestUpdate } from './api';

import { ContactsList } from './components/ContactsList/ContactsList';
import { ContactInfo } from './components/ContactInfo/ContactInfo';

function App() {
  const table ='contact';
  const [ contacts, setContacts ] = useState([]);
  const [ selectContact, setSelectContact ] = useState(null);
  const [ openAddForm, setOpenAddForm ] = useState(false);

  const addContact = useCallback((firstNameField, lastNameField, phoneField) => {
    const id = (+new Date()).toString();
    const newContact = {
      id,
      firstName: firstNameField,
      lastName: lastNameField,
      phone: phoneField,
    };

    if (selectContact !== null) {
      const copyContacts = contacts.map(contact => {
        const {
          id: contactId,
        } = contact;

        if (contactId === selectContact.id) {
          const updateContactInfo = {
            id: contactId,
            firstName: firstNameField,
            lastName: lastNameField,
            phone: phoneField,
          };

          requestUpdate(updateContactInfo, table);

          return updateContactInfo;
        };

        return contact;
      });

      setContacts([...copyContacts]);
      setSelectContact(null);
      return;
    };

    requestCreate(newContact, table);
    setContacts([...contacts, newContact]);
  }, [contacts, selectContact]);

  const deleteContact = useCallback((contactId) => {

    const copyContacts = contacts.filter(contact => contact.id !== contactId);

    setContacts([...copyContacts]);

    requestDelete(contactId, table);
  }, [contacts]) ;

  useEffect(() => {
    requestRead(table).then(contactsFromAPI => {
      const {
        records,
      } = contactsFromAPI;

      setContacts(records);
    });
  }, []);

  return (
    <div className={AppCSS.App}>
      <div
        className={AppCSS.wrapper}
      >
      {!selectContact && (
        <ContactsList
          contacts={contacts}
          deleteContact={deleteContact}
          setSelectContact={setSelectContact}
          setOpenAddForm={setOpenAddForm}
          openAddForm={openAddForm}
          addContact={addContact}
          selectContact={selectContact}
        />
      )}
      {selectContact && (
        <ContactInfo 
          selectContact={selectContact}
          setSelectContact={setSelectContact}
          deleteContact={deleteContact}

          openAddForm={openAddForm}
          setOpenAddForm={setOpenAddForm}
          addContact={addContact}
        />
      )}
      </div>
    </div>
  );
}

export default App;
