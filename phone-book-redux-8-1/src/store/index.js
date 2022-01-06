import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import contactsReducer from "./contacts";
import selectContactReducer from './selectContact';
import openAddFormReducer from './openAddForm';
import openModalConfirmReducer from './openModalConfirm';
import { requestCreate, requestDelete, requestRead, requestUpdate } from "../api";
import firstNameFieldReducer from "./firstNameField";
import lastNameFieldReducer from "./lastNameField";
import phoneFieldReducer from "./phoneField";
import firstNameErrorReducer from "./firstNameError";
import lastNameErrorReducer from "./lastNameError";
import phoneErrorReducer from "./phoneError";

export function getContacts(state) {
  const {
    contacts,
  } = state;

  return contacts;
};

export function getSelectContact(state) {
  const {
    selectContact,
  } = state;

  return selectContact
};

export function getOpenAddForm(state) {
  const {
    openAddForm,
  } = state;

  return openAddForm;
};

export function getOpenModalConfirm(state) {
  const {
    openModalConfirm,
  } = state;

  return openModalConfirm;
};

export function getFirstNameField(state) {
  const {
    firstNameField,
  } = state;

  return firstNameField;
};

export function getLastNameField(state) {
  const {
    lastNameField,
  } = state;

  return lastNameField;
};

export function getPhoneField(state) {
  const {
    phoneField,
  } = state;

  return phoneField;
};

export function getFirstNameError(state) {
  const {
    firstNameError,
  } = state;

  return firstNameError;
};

export function getLastNameError(state) {
  const {
    lastNameError,
  } = state;

  return lastNameError;
};

export function getPhoneError(state) {
  const {
    phoneError,
  } = state;

  return phoneError;
};

export const actions = {
  readContacts: () => () => {
    return new Promise(resolve => {
      resolve(requestRead());
    })
  },
  deleteContactFromAPI: (id) => () => {
    return requestDelete(id);
  },
  creatContactForAPI: (record) => () => {
    return requestCreate(record);
  },
  updateContactForAPI: (record) => () => {
    return requestUpdate(record);
  },
  validField: (validRegExp, field, setError) => (dispatch) => {
    const validTest = validRegExp.test(field);

    if (!validTest || field === null) {
      dispatch(setError(true));
    };
    
    return validTest;
  }
};

const reducer = combineReducers({
  contacts: contactsReducer,
  selectContact: selectContactReducer,
  openAddForm: openAddFormReducer,
  openModalConfirm: openModalConfirmReducer,
  firstNameField: firstNameFieldReducer,
  lastNameField: lastNameFieldReducer,
  phoneField: phoneFieldReducer,
  firstNameError: firstNameErrorReducer,
  lastNameError: lastNameErrorReducer,
  phoneError: phoneErrorReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
