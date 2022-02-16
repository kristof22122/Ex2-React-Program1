import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import ModalAddFormCSS from './ModalAddForm.module.css';

import { actions, fieldsLabel } from '../../store';

import {
  reselectFirstNameField,
  reselectFirstNameError,
  reselectLastNameField,
  reselectLastNameError,
  reselectPhoneField,
  reselectPhoneError,
} from '../../store/modalAddFormFields';
import { actions as toggleModalFormsAction } from '../../store/toggleModalForms';
import { reselectSelectedContact } from '../../store/contacts';

const {
  firstNameLabel,
  lastNameLabel,
  phoneLabel,
  addFormLabel,
} = fieldsLabel;

const {
  toggleModalForm,
} = toggleModalFormsAction;

const {
  addFormHandleClick,
  addFormHandleChange,
} = actions;

const InputBlock = (props) => {
  const {
    fieldName,
    fieldValue,
    errorValue,
    errorMessage,
    placeholder,
    callback,
  } = props;

  return (
    <>
      <div className="mb-3">
          <label
            htmlFor={fieldName}
            className={ModalAddFormCSS.form__label}
          >
            Firs name
          </label>
          <input
            type="text"
            className="form-control"
            name={fieldName}
            id={fieldName}
            placeholder={placeholder}
            value={fieldValue || ''}
            onChange={callback}
            required
          />
        </div>
        {(errorValue) && (
            <label
              className={ModalAddFormCSS.form__error}
            >
              {errorMessage}
            </label>
          )}
    </>
  );
}

const ModalAddForm = React.memo((props) => {
  const {
    selectContact,

    toggleModalForm,
    
    addFormHandleClick,
    addFormHandleChange,
    
    firstNameField,
    lastNameField,
    phoneField,
    firstNameError,
    lastNameError,
    phoneError,
  } = props;

  const handleClick = () => {
    addFormHandleClick();
  };

  const closeForm = () => {
    toggleModalForm(addFormLabel)
  };

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    addFormHandleChange(value, name);
  };

  return ReactDOM.createPortal(
    <div
      className={ModalAddFormCSS.wrapper}
    >
      <form
        className={ModalAddFormCSS.form}
      >
        <InputBlock
          fieldName={firstNameLabel}
          fieldValue={firstNameField}
          errorValue={firstNameError}
          errorMessage='Wrong first name'
          placeholder='1 - 10 letters'
          callback={handleChange}
        />
        <InputBlock
          fieldName={lastNameLabel}
          fieldValue={lastNameField}
          errorValue={lastNameError}
          errorMessage='Wrong last name'
          placeholder='1 - 20 letters'
          callback={handleChange}
        />
        <InputBlock
          fieldName={phoneLabel}
          fieldValue={phoneField}
          errorValue={phoneError}
          errorMessage='Wrong phone'
          placeholder='+8(999)999-99-99'
          callback={handleChange}
        />
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
  const selectContact = reselectSelectedContact(state);

  const firstNameField = reselectFirstNameField(state);
  const lastNameField = reselectLastNameField(state);
  const phoneField = reselectPhoneField(state);
  const firstNameError = reselectFirstNameError(state);
  const lastNameError = reselectLastNameError(state);
  const phoneError = reselectPhoneError(state);

  return {
    selectContact,
    
    firstNameField,
    lastNameField,
    phoneField,
    firstNameError,
    lastNameError,
    phoneError,
  }
};

export default connect(
  mapStateProps,
  {
    toggleModalForm,
    addFormHandleClick,
    addFormHandleChange,
  }
)(ModalAddForm);
