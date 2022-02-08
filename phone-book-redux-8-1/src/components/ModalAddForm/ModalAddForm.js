import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import ModalAddFormCSS from './ModalAddForm.module.css';

import { actions } from '../../store';

import { actions as modalAddFormFieldsAction } from '../../store/modalAddFormFields';
import { actions as toggleModalFormsAction } from '../../store/toggleModalForms';

const {
  toggleModalForm,
} = toggleModalFormsAction;

const {
  addFormHandleClick,
  addFormHandleChange
} = actions;

const {
  setFirstNameField,
  setFirstNameError,
  setLastNameField,
  setLastNameError,
  setPhoneField,
  setPhoneError,
} = modalAddFormFieldsAction;

const ModalAddForm = React.memo((props) => {
  const {
    selectContact,

    setFirstNameField,
    setLastNameField,
    setPhoneField,
    setFirstNameError,
    setLastNameError,
    setPhoneError,

    toggleModalForm,
    
    addFormHandleClick,
    addFormHandleChange,

    modalAddFormFields,
  } = props;

  const {
    firstNameField,
    lastNameField,
    phoneField,
    firstNameError,
    lastNameError,
    phoneError,
  } = modalAddFormFields;

  const handleClick = () => {
    addFormHandleClick(
      firstNameField,
      setFirstNameError,
      lastNameField,
      setLastNameError,
      phoneField,
      setPhoneError,
      selectContact
    );
  };

  const closeForm = () => {
    toggleModalForm('addForm')
  };

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    addFormHandleChange(value, name);
  };

  useEffect(() => {
    if (selectContact) {
      setFirstNameField(selectContact.firstName);
      setLastNameField(selectContact.lastName);
      setPhoneField(selectContact.phone);
    };

  }, [
    selectContact,
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

const mapStateProps = (state) => {
  return {
    selectContact: state.contactsValues.selectContact,
    firstNameField: state.firstNameField,
    lastNameField: state.lastNameField,
    phoneField: state.phoneField,
    firstNameError: state.firstNameError,
    lastNameError: state.lastNameError,
    phoneError: state.phoneError,

    modalAddFormFields: state.modalAddFormFields,
  }
};

const mapDispatchToProps = () => {
  return {
    setFirstNameField,
    setLastNameField,
    setPhoneField,
    setFirstNameError,
    setLastNameError,
    setPhoneError,
    toggleModalForm,
    addFormHandleClick,
    addFormHandleChange,
  }
};

export default connect(mapStateProps, mapDispatchToProps())(ModalAddForm);
