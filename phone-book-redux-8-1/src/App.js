import React, { useEffect, useCallback } from 'react';
import AppCSS from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ContactsList } from './components/ContactsList/ContactsList';
import { ContactInfo } from './components/ContactInfo/ContactInfo';

import { ModalAddForm } from './components/ModalAddForm/ModalAddForm';

import { useSelector, useDispatch } from 'react-redux';

import { getSelectContact, getOpenAddForm, actions } from './store';
import { actions as contactsAction } from './store/contacts';
import { actions as openAddFormAction } from './store/openAddForm';
import { actions as selectContactAction } from './store/selectContact';


function App() {
  const dispatch = useDispatch();

  const selectContact = useSelector(getSelectContact);

  const openAddForm = useSelector(getOpenAddForm);
  const {
    toggle,
  } = openAddFormAction;

  const {
    add,
    deleteSelectedContact,
    update,
  } = contactsAction;

  const {
    select,
  } = selectContactAction;

  const {
    readContacts,
    deleteContactFromAPI,
    creatContactForAPI,
    updateContactForAPI,
  } = actions;

  const addContact = useCallback((firstNameField, lastNameField, phoneField) => {
    if (selectContact !== null) {
      const {
        id: selectContactId,
      } = selectContact;

      const updateContactInfo = {
        id: selectContactId,
        firstName: firstNameField,
        lastName: lastNameField,
        phone: phoneField,
      };

      dispatch(update(updateContactInfo));
      dispatch(select(updateContactInfo));
      dispatch(updateContactForAPI(updateContactInfo));
      return;
    }

    const id = (+new Date()).toString();
    const newContact = {
      id,
      firstName: firstNameField,
      lastName: lastNameField,
      phone: phoneField,
    };

    dispatch(add(newContact));
    dispatch(creatContactForAPI(newContact))
  }, [dispatch,
      selectContact,
      update,
      add,
      select,
      creatContactForAPI,
      updateContactForAPI,
    ]);

  const deleteContact = useCallback((contactId) => {
    dispatch(deleteSelectedContact(contactId));
    dispatch(deleteContactFromAPI(contactId));
  }, [dispatch, deleteSelectedContact, deleteContactFromAPI]);

  const toggleAddModal = useCallback(() => {
    dispatch(toggle());
  }, [dispatch, toggle]);

  useEffect(() => {
    dispatch(readContacts())
      .then(res => {
        dispatch(add(res.records));
      });
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={AppCSS.App}>
      {!selectContact && (
        <ContactsList
          toggleAddModal={toggleAddModal}
        />
      )}
      {selectContact && (
        <ContactInfo
          deleteContact={deleteContact}
          toggleAddModal={toggleAddModal}
        />
      )}
      {openAddForm && (
        <ModalAddForm 
          addContact={addContact}
          toggleAddModal={toggleAddModal}
        />
      )}
    </div>
  );
}

export default App;
