import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import ModalAddFormCSS from './ModalAddForm.module.css';

import { getSelectContact } from '../../store';

export const ModalAddForm = React.memo((props) => {
  const {
    addContact,
    toggleAddModal,
  } = props;

  const selectContact = useSelector(getSelectContact);

  const [ firstNameField, setFirstNameField ] = useState(null);
  const [ lastNameField, setLastNameField ] = useState(null);
  const [ phoneField, setPhoneField ] = useState(null);

  const [ firstNameError, setFirstNameError ] = useState(false);
  const [ lastNameError, setLastNameError ] = useState(false);
  const [ phoneError, setPhoneError ] = useState(false);
  
  const validFirstName = /^[A-Za-z]{2,10}$/;
  const validLastName = /^[A-Za-z]{2,20}$/;
  const validPhone = /^\+8\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

  const validField = (validRegExp, field, setError) => {
    const validTest = validRegExp.test(field);
    if (!validTest || field === null) {
      setError(true);
    }
    
    return validTest;
  }

  const validate = () => {
    const validFirstNameTest = validField(validFirstName, firstNameField, setFirstNameError);
    const validLastNameTest = validField(validLastName, lastNameField, setLastNameError);
    const validPhoneTest = validField(validPhone, phoneField, setPhoneError);
    
    return (validFirstNameTest
        && validLastNameTest
        && validPhoneTest);
  };

  const handleClick = () => {
    if (validate()) {
      addContact(firstNameField, lastNameField, phoneField);
      setFirstNameField(null);
      setLastNameField(null);
      setPhoneField(null);
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
        setFirstNameField(value);
        setFirstNameError(false);
        break;

      case 'lastNameField':
        setLastNameField(value);
        setLastNameError(false);
        break;

      case 'phoneField':
        setPhoneField(value);
        setPhoneError(false);
        break;
    
      default:
        break;
    };
  };

  useEffect(() => {
    if (selectContact) {
      setFirstNameField(selectContact.firstName);
      setLastNameField(selectContact.lastName);
      setPhoneField(selectContact.phone);
    };
  }, [selectContact])

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
