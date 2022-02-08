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
  setLastNameField,
  setPhoneField,
} = modalAddFormFieldsAction;

const InputBlock = (props) => {
  const {
    fieldName,
    fieldValue,
    errorValue,
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
              Wrong first name
            </label>
          )}
    </>
  );
}

const ModalAddForm = React.memo((props) => {
  const {
    selectContact,

    setFirstNameField,
    setLastNameField,
    setPhoneField,

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
      lastNameField,
      phoneField,
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
        <InputBlock
          fieldName='firstNameField'
          fieldValue={firstNameField}
          errorValue={firstNameError}
          placeholder='1 - 10 letters'
          callback={handleChange}
        />
        <InputBlock
          fieldName='lastNameField'
          fieldValue={lastNameField}
          errorValue={lastNameError}
          placeholder='1 - 20 letters'
          callback={handleChange}
        />
        <InputBlock
          fieldName='phoneField'
          fieldValue={phoneField}
          errorValue={phoneError}
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
    toggleModalForm,
    addFormHandleClick,
    addFormHandleChange,
  }
};

export default connect(mapStateProps, mapDispatchToProps())(ModalAddForm);
