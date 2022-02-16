import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AppCSS from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactsList from './components/ContactsList/ContactsList';
import ContactInfo from './components/ContactInfo/ContactInfo';
import ModalAddForm from './components/ModalAddForm/ModalAddForm';

import { actions } from './store';
import { reselectSelectedContact } from './store/contacts';
import { reselectOpenAddForm } from './store/toggleModalForms';

const {
  readContactsFromApi,
} = actions;

function App(props) {
  const {
    selectContact,
    openAddForm,
    readContactsFromApi,
  } = props;

  useEffect(() => {
    readContactsFromApi();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={AppCSS.App}>
      {!selectContact && (
        <ContactsList />
      )}
      {selectContact && (
        <ContactInfo />
      )}
      {openAddForm && (
        <ModalAddForm />
      )}
    </div>
  );
}

const mapStateProps = (state) => {
  const selectContact = reselectSelectedContact(state);
  const openAddForm = reselectOpenAddForm(state);

  return {
    selectContact,
    openAddForm,
  }
};

export default connect(mapStateProps, {readContactsFromApi})(App);
