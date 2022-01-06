import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import contactsReducer from "./contacts";
import selectContactReducer from './selectContact';
import openAddFormReducer from './openAddForm';
import openModalConfirmReducer from './openModalConfirm';
import { requestCreate, requestDelete, requestRead, requestUpdate } from "../api";

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
}

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
};

const reducer = combineReducers({
  contacts: contactsReducer,
  selectContact: selectContactReducer,
  openAddForm: openAddFormReducer,
  openModalConfirm: openModalConfirmReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
