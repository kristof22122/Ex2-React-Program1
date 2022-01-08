import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import ModalAddFormCSS from './ModalAddForm.module.css';

import {
  actions,
  getFirstNameError,
  getFirstNameField,
  getLastNameError,
  getLastNameField,
  getPhoneError,
  getPhoneField,
  getSelectContact,
} from '../../store';

import { actions as firstNameFieldAction } from '../../store/firstNameField';
import { actions as lastNameFieldAction } from '../../store/lastNameField';
import { actions as phoneFieldAction } from '../../store/phoneField';
import { actions as firstNameErrorAction } from '../../store/firstNameError';
import { actions as lastNameErrorAction } from '../../store/lastNameError';
import { actions as phoneErrorAction } from '../../store/phoneError';

export const ModalAddForm = React.memo((props) => {
  const {
    addContact,
    toggleAddModal,
  } = props;

  const dispatch = useDispatch();

  const selectContact = useSelector(getSelectContact);
  const firstNameField = useSelector(getFirstNameField);
  const lastNameField = useSelector(getLastNameField);
  const phoneField = useSelector(getPhoneField);
  const firstNameError = useSelector(getFirstNameError);
  const lastNameError = useSelector(getLastNameError);
  const phoneError = useSelector(getPhoneError);

  const {
    validField,
  } = actions;

  const {
    setFirstNameField,
  } = firstNameFieldAction;

  const {
    setLastNameField,
  } = lastNameFieldAction;

  const {
    setPhoneField,
  } = phoneFieldAction;

  const {
    setFirstNameError,
  } = firstNameErrorAction;

  const {
    setLastNameError,
  } = lastNameErrorAction;

  const {
    setPhoneError,
  } = phoneErrorAction;
  
  const validFirstName = /^[A-Za-z]{2,10}$/;
  const validLastName = /^[A-Za-z]{2,20}$/;
  const validPhone = /^\+8\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

  const validate = () => {
    const validFirstNameTest = dispatch(validField(validFirstName, firstNameField, setFirstNameError));
    const validLastNameTest = dispatch(validField(validLastName, lastNameField, setLastNameError));
    const validPhoneTest = dispatch(validField(validPhone, phoneField, setPhoneError));
    
    return (validFirstNameTest
        && validLastNameTest
        && validPhoneTest);
  };

  const handleClick = () => {
    if (validate()) {
      addContact(firstNameField, lastNameField, phoneField);
      dispatch(setFirstNameField(null));
      dispatch(setLastNameField(null));
      dispatch(setPhoneField(null));
      toggleAddModal();
    };      
  };

  const closeForm = () => {
      toggleAddModal();
    };

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

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
  };

  useEffect(() => {
    if (selectContact) {
      dispatch(setFirstNameField(selectContact.firstName));
      dispatch(setLastNameField(selectContact.lastName));
      dispatch(setPhoneField(selectContact.phone));
    };
  }, [
    selectContact,
    dispatch,
    setFirstNameField,
    setLastNameField,
    setPhoneField,
  ])

  return ReactDOM.createPortal(
    <div
      className={ModalAddFormCSS.wrapper}
    >
      <form
        className={ModalAddFormCSS.form}
      >
        <div className="mb-3">
          <label
            htmlFor="firstNameField"
            className={ModalAddFormCSS.form__label}
          >
            Firs name
          </label>
          <input
            type="text"
            className="form-control"
            name="firstNameField"
            id="firstNameField"
            placeholder="1 - 10 letters"
            value={firstNameField || ''}
            onChange={handleChange}
            required
          />
        </div>
        {(firstNameError) && (
            <label
              className={ModalAddFormCSS.form__error}
            >
              Wrong first name
            </label>
          )}
        <div className="mb-3">
          <label
            htmlFor="lastNameField"
            className={ModalAddFormCSS.form__label}
          >
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastNameField"
            id="lastNameField"
            placeholder="1 - 20 letters"
            value={lastNameField || ''}
            onChange={handleChange}
            required
          />
        </div>
        {(lastNameError) && (
            <label
              className={ModalAddFormCSS.form__error}
            >
              Wrong last name
            </label>
          )}
        <div className="mb-3">
          <label
            className={ModalAddFormCSS.form__label}
            htmlFor="phoneField"
          >
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            name="phoneField"
            id="phoneField"
            placeholder="+8(999)999-99-99"
            value={phoneField || ''}
            onChange={handleChange}
            required
          />
        </div>
        {(phoneError) && (
            <label
              className={ModalAddFormCSS.form__error}
            >
              Wrong phone number
              +8(999)999-99-99
            </label>
          )}
        <div
          className={ModalAddFormCSS.form__buttons}
        >
          <button
            type="button"
            className="btn btn-success"
            onClick={handleClick}
          >
            {selectContact ? 'Change' : 'Add'}
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={closeForm}
          >
            Close
          </button>
        </div>
        
      </form>
    </div>,
    document.getElementById('modalAddForm')
  );
});
