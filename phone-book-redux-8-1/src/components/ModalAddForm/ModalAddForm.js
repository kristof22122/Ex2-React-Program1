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
    select: selectFirsNameField,
    setNull: setNullFirstNameField,
  } = firstNameFieldAction;

  const {
    select: selectLastNameField,
    setNull: setNullLastNameField,
  } = lastNameFieldAction;

  const {
    select: selectPhoneField,
    setNull: setNullPhoneField,
  } = phoneFieldAction;

  const {
    setValue: firstNameErrorSetValue,
  } = firstNameErrorAction;

  const {
    setValue: lastNameErrorSetValue,
  } = lastNameErrorAction;

  const {
    setValue: phoneErrorSetValue,
  } = phoneErrorAction;
  
  const validFirstName = /^[A-Za-z]{2,10}$/;
  const validLastName = /^[A-Za-z]{2,20}$/;
  const validPhone = /^\+8\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

  const validate = () => {
    const validFirstNameTest = dispatch(validField(validFirstName, firstNameField, firstNameErrorSetValue));
    const validLastNameTest = dispatch(validField(validLastName, lastNameField, lastNameErrorSetValue));
    const validPhoneTest = dispatch(validField(validPhone, phoneField, phoneErrorSetValue));
    
    return (validFirstNameTest
        && validLastNameTest
        && validPhoneTest);
  };

  const handleClick = () => {
    if (validate()) {
      addContact(firstNameField, lastNameField, phoneField);
      dispatch(setNullFirstNameField(null));
      dispatch(setNullLastNameField(null));
      dispatch(setNullPhoneField(null));
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
        dispatch(selectFirsNameField(value));
        dispatch(firstNameErrorSetValue(false));
        break;

      case 'lastNameField':
        dispatch(selectLastNameField(value));
        dispatch(lastNameErrorSetValue(false));
        break;

      case 'phoneField':
        dispatch(selectPhoneField(value));
        dispatch(phoneErrorSetValue(false));
        break;
    
      default:
        break;
    };
  };

  useEffect(() => {
    if (selectContact) {
      dispatch(selectFirsNameField(selectContact.firstName));
      dispatch(selectLastNameField(selectContact.lastName));
      dispatch(selectPhoneField(selectContact.phone));
    };
  }, [
    selectContact,
    dispatch,
    selectFirsNameField,
    selectLastNameField,
    selectPhoneField,
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
