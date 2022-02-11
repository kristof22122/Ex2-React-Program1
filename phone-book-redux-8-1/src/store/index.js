import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { requestCreate, requestRead, requestUpdate, requestDelete } from "../api";

import contactsReducer from "./contacts";
import toggleModalFormsReducer, { actions as toggleModalFormsAction } from './toggleModalForms';

import modalAddFormFieldsReducer from "./modalAddFormFields";

import { actions as contactsAction, selectSelectedContact } from './contacts';

import {
  actions as modalAddFormFieldsAction,
  selectFirstNameField,
  selectLastNameField,
  selectPhoneField,
} from "./modalAddFormFields";

function baseRequestApiAction(callback) {
  return (value) => () => {
    return callback(value);
  };
};

const {
  add,
  update,
  setSelectContact,
  deleteSelectedContact,
} = contactsAction;

const {
  setFormField,
} = modalAddFormFieldsAction;

const {
  toggleModalForm,
} = toggleModalFormsAction;

export const actions = {
  creatContactForAPI: baseRequestApiAction(requestCreate),
  updateContactForAPI: baseRequestApiAction(requestUpdate),
  readContactsFromApi: () => {
    return (dispatch) => {
      return requestRead()
      .then(res => {
        dispatch(add(res.records));
      });
    };
  },
  addContactsToApi: (firstNameField, lastNameField, phoneField, selectContact) => {
    return (dispatch) => {
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
        dispatch(setSelectContact(updateContactInfo));
        requestUpdate(updateContactInfo)
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
      requestCreate(newContact)
    };
  },
  addFormHandleClick: () => {
    const state = store.getState();
    const selectContact = selectSelectedContact(state);
    const firstNameField = selectFirstNameField(state);
    const lastNameField = selectLastNameField(state);
    const phoneField = selectPhoneField(state);

    return (dispatch) => {
      const validField = (validRegExp, field, setError, fieldName) => {
        const validTest = validRegExp.test(field);

        if (!validTest || field === null) {
          dispatch(setError(true, fieldName));
        };

        return validTest;
      };
      
      const validFirstName = /^[A-Za-z]{2,10}$/;
      const validLastName = /^[A-Za-z]{2,20}$/;
      const validPhone = /^\+8\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

      if (validField(validFirstName, firstNameField, setFormField, 'firstNameError')
          && validField(validLastName, lastNameField, setFormField, 'lastNameError')
          && validField(validPhone, phoneField, setFormField, 'phoneError')
        ) {
        dispatch(actions.addContactsToApi(firstNameField, lastNameField, phoneField, selectContact));
        dispatch(setFormField(null, 'firstNameField'));
        dispatch(setFormField(null, 'lastNameField'));
        dispatch(setFormField(null, 'phoneField'));
        dispatch(toggleModalForm('addForm'));
      }
    }
  },
  addFormHandleChange: (value, name) => {
    return (dispatch) => {
      switch (name) {
        case 'firstNameField':
          dispatch(setFormField(value, 'firstNameField'));
          dispatch(setFormField(false, 'firstNameError'));
          break;
  
        case 'lastNameField':
          dispatch(setFormField(value, 'lastNameField'));
          dispatch(setFormField(false, 'lastNameError'));
          break;
  
        case 'phoneField':
          dispatch(setFormField(value, 'phoneField'));
          dispatch(setFormField(false, 'phoneError'));
          break;
      
        default:
          break;
      };
    }
  },
  confirmDelete: (choice, id) => {
    return (dispatch) => {
      if (choice) {
        requestDelete(id);
        dispatch(deleteSelectedContact(id));
        dispatch(setSelectContact(null));
      };

      dispatch(toggleModalForm('confirmForm'));
    }
  },
  openAddModalForm: () => {
    const state = store.getState();
    const selectContact = selectSelectedContact(state);

    return (dispatch) => {
      if (selectContact) {
        dispatch(setFormField(selectContact.firstName, 'firstNameField'));
        dispatch(setFormField(selectContact.lastName, 'lastNameField'));
        dispatch(setFormField(selectContact.phone, 'phoneField'));
      };
    }
  },
};

const reducer = combineReducers({
  contactsValues: contactsReducer,
  modalAddFormValues: modalAddFormFieldsReducer,
  toggleModalFormsValues: toggleModalFormsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
