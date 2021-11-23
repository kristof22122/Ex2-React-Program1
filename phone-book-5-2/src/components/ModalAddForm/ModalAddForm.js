import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import ModalAddFormCSS from './ModalAddForm.module.css';

export const ModalAddForm = React.memo((props) => {
  const {
    addContact,
    setOpenAddForm,
    selectContact,
  } = props;

  const [ firstNameField, setFirstNameField ] = useState(null);
  const [ lastNameField, setLastNameField ] = useState(null);
  const [ phoneField, setPhoneField ] = useState(null);

  const [ firstNameError, setFirstNameError ] = useState(false);
  const [ lastNameError, setLastNameError ] = useState(false);
  const [ phoneError, setPhoneError ] = useState(false);

  const validFirstName = new RegExp('[A-Za-z]{1,10}');
  const validLastName = new RegExp('[A-Za-z]{1,20}');
  const validPhone = new RegExp('[0-9]{12}');

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
    
    if (validFirstNameTest
        && validLastNameTest
        && validPhoneTest) {
      return true;
    }

    return false;
  };

  const handleClick = () => {
    if (validate()) {
      addContact(firstNameField, lastNameField, phoneField);
      setFirstNameField(null);
      setLastNameField(null);
      setPhoneField(null);
      setOpenAddForm(false);
    };      
  };

  const closeForm = () => {
      setOpenAddForm(false)
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
            Add contact
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
