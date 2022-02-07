import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import { requestCreate, requestRead, requestUpdate } from "../api";

import contactsReducer from "./contacts";
import selectContactReducer from './selectContact';
import openAddFormReducer from './openAddForm';
import openModalConfirmReducer from './openModalConfirm';

import modalAddFormFieldsReducer from "./modalAddFormFields";

import { actions as contactsAction } from './contacts';
import { actions as selectContactAction } from './selectContact';

import { actions as modalAddFormFieldsAction } from "./modalAddFormFields";

import { actions as openAddFormAction } from './openAddForm';

function baseRequestApiAction(callback) {
  return (value) => () => {
    return callback(value);
  };
};

const {
  add,
  update,
} = contactsAction;

const {
  setSelectContact,
} = selectContactAction;

const {
  setFirstNameField,
  setFirstNameError,
  setLastNameField,
  setLastNameError,
  setPhoneField,
  setPhoneError,
} = modalAddFormFieldsAction;

const {
  toggle: toggleAddFormAction,
} = openAddFormAction;

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
  addFormHandleClick: (
      firstNameField,
      setFirstNameError,
      lastNameField,
      setLastNameError,
      phoneField,
      setPhoneError,
      selectContact,
      ) => {
    return (dispatch) => {
      const validField = (validRegExp, field, setError) => {
        const validTest = validRegExp.test(field);

        if (!validTest || field === null) {
          dispatch(setError(true));
        };

        return validTest;
      };
      
      const validFirstName = /^[A-Za-z]{2,10}$/;
      const validLastName = /^[A-Za-z]{2,20}$/;
      const validPhone = /^\+8\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

      const validate = () => {
        const validFirstNameTest = validField(validFirstName, firstNameField, setFirstNameError);
        const validLastNameTest = validField(validLastName, lastNameField, setLastNameError);
        const validPhoneTest = validField(validPhone, phoneField, setPhoneError);
          
        return (validFirstNameTest
            && validLastNameTest
            && validPhoneTest);
      };

      if (validate()) {
        dispatch(actions.addContactsToApi(firstNameField, lastNameField, phoneField, selectContact));
        dispatch(setFirstNameField(null));
        dispatch(setLastNameField(null));
        dispatch(setPhoneField(null));
        dispatch(toggleAddFormAction());
      }
    }
  },
  addFormHandleChange: (value, name) => {
    return (dispatch) => {
      switch (name) {
        case 'firstNameField':
          dispatch(setFirstNameField(value));
          dispatch(setFirstNameError(false));
          break;
  
        case 'lastNameField':
          dispatch(setLastNameField(value));
          dispatch(setLastNameError(false));
          break;
  
        case 'phoneField':
          dispatch(setPhoneField(value));
          dispatch(setPhoneError(false));
          break;
      
        default:
          break;
      };
    }
  }
};

const reducer = combineReducers({
  contacts: contactsReducer,
  selectContact: selectContactReducer,
  openAddForm: openAddFormReducer,
  openModalConfirm: openModalConfirmReducer,

  modalAddFormFields: modalAddFormFieldsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
