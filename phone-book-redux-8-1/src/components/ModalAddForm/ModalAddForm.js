import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import ModalAddFormCSS from './ModalAddForm.module.css';

import { actions } from '../../store';

import {
  selectFirstNameField,
  selectFirstNameError,
  selectLastNameField,
  selectLastNameError,
  selectPhoneField,
  selectPhoneError,
} from '../../store/modalAddFormFields';
import { actions as toggleModalFormsAction } from '../../store/toggleModalForms';
import { selectSelectedContact } from '../../store/contacts';


const {
  toggleModalForm,
} = toggleModalFormsAction;

const {
  addFormHandleClick,
  addFormHandleChange,
  openAddModalForm,
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

    openAddModalForm,
  } = props;

  const handleClick = () => {
    addFormHandleClick();
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
    openAddModalForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectContact,
  ])

  return ReactDOM.createPortal(
    <div
      className={ModalAddFormCSS.wrapper}
    >
      <form
        className={ModalAddFormCSS.form}
      >
        <InputBlock
          fieldName='firstNameField'
          fieldValue={firstNameField}
          errorValue={firstNameError}
          errorMessage='Wrong first name'
          placeholder='1 - 10 letters'
          callback={handleChange}
        />
        <InputBlock
          fieldName='lastNameField'
          fieldValue={lastNameField}
          errorValue={lastNameError}
          errorMessage='Wrong last name'
          placeholder='1 - 20 letters'
          callback={handleChange}
        />
        <InputBlock
          fieldName='phoneField'
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
  const selectContact = selectSelectedContact(state);

  const firstNameField = selectFirstNameField(state);
  const lastNameField = selectLastNameField(state);
  const phoneField = selectPhoneField(state);
  const firstNameError = selectFirstNameError(state);
  const lastNameError = selectLastNameError(state);
  const phoneError = selectPhoneError(state);

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
    openAddModalForm,
  }
)(ModalAddForm);
