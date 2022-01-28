import React, { useEffect, useCallback } from 'react';
import AppCSS from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ContactsList } from './components/ContactsList/ContactsList';
import { ContactInfo } from './components/ContactInfo/ContactInfo';

import { ModalAddForm } from './components/ModalAddForm/ModalAddForm';

import { useDispatch, connect } from 'react-redux';

import { actions } from './store';
import { actions as openAddFormAction } from './store/openAddForm';

const {
  readContactsFromApi,
} = actions;

function App(props) {
  const {
    selectContact,
    openAddForm,
  } = props;

  const dispatch = useDispatch();

  // const selectContact = useSelector(getSelectContact);

  // const openAddForm = useSelector(getOpenAddForm);
  const {
    toggle,
  } = openAddFormAction;

  // const {
  //   readContactsFromApi,
  // } = actions;

  const toggleAddModal = useCallback(() => {
    dispatch(toggle());
  }, [dispatch, toggle]);

  useEffect(() => {
    dispatch(readContactsFromApi());
    
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
          toggleAddModal={toggleAddModal}
        />
      )}
      {openAddForm && (
        <ModalAddForm
          toggleAddModal={toggleAddModal}
        />
      )}
    </div>
  );
}

const mapStateProps = (state) => {
  return {
    selectContact: state.selectContact,
    openAddForm: state.openAddForm,
  }
};

const mapDispatchToProps = () => {
  return {
    readContactsFromApi,
  }
};

export default connect(mapStateProps, mapDispatchToProps())(App);
