import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import ContactInfoCSS from './ContactInfo.module.css';

import { ModalConfirm } from '../ModalConfirm/ModalConfirm';

// import { actions as openModalConfirmAction } from '../../store/openModalConfirm';

import { actions as contactsAction } from '../../store/contacts';
// import { actions as openAddFormAction } from '../../store/openAddForm';
import { actions as toggleModalFormsAction } from '../../store/toggleModalForms';

import { requestDelete } from '../../api';

const {
  toggleModalForm,
} = toggleModalFormsAction;

const {
  deleteSelectedContact,
  setSelectContact,
} = contactsAction;

// const {
//   toggle: toggleModalConfirmAction,
// } = openModalConfirmAction;

// const {
//   toggle: toggleAddFormAction,
// } = openAddFormAction;

const ContactInfo = (props) => {
  const {
    selectContact,
    openModalConfirm,
    deleteSelectedContact,
    setSelectContact,
    toggleModalForm,
    // toggleModalConfirmAction,
    // toggleAddFormAction,
  } = props;

  const {
    id,
    firstName,
    lastName,
    phone,
  } = selectContact;

  const toggleModalConfirm = useCallback((choice) => {
    if (choice) {
      requestDelete(id);
      deleteSelectedContact(id);
      setSelectContact(null);
    };

    // toggleModalConfirmAction();
    toggleModalForm('confirmForm');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setSelectContact(null);
  };

  const handleEdit = () => {
    // toggleAddFormAction();
    toggleModalForm('addForm')
  };

  return (
    <div
      className={ContactInfoCSS.contactInfo}
    >
      <div
        className="card text-white bg-dark mb-3"
      >
        <div className="row g-0">
          <div className="col-md-2">
            <img 
              src="no_avatar.png"
              className={ContactInfoCSS.contactInfo__image}
              alt="avatar"
            />
          </div>
          <div className="col-md-10">
            <div
              className="card-header bg-transparent border-secondary"
            >
              Contact:
            </div>
            <div
              className="card-body"
            >
              <h5
                className="card-title"
              >
                Name: {` ${firstName} ${lastName}`}
              </h5>
              <p
                className="card-text"
              >
                Phone: {phone}
              </p>
            </div>
            <div
              className="card-footer bg-transparent border-secondary"
            >
              <div
                className={ContactInfoCSS.contactInfo__buttons}
              >
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => {
                    toggleModalConfirm(false);
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={handleEdit}
                >
                  Edit
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openModalConfirm && (
        <ModalConfirm
          toggleModalConfirm={toggleModalConfirm}
        />
      )}
    </div>
  )
};

const mapStateProps = (state) => {
  return {
    selectContact: state.contactsValues.selectContact,
    openModalConfirm: state.toggleModalFormsValues.openModalConfirm,
  }
};

const mapDispatchToProps = () => {
  return {
    deleteSelectedContact,
    setSelectContact,
    toggleModalForm,
    // toggleModalConfirmAction,
    // toggleAddFormAction,
  }
};

export default connect(mapStateProps, mapDispatchToProps())(ContactInfo);
