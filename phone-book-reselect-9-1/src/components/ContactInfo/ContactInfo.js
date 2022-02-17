import React from 'react';
import { connect } from 'react-redux';

import ContactInfoCSS from './ContactInfo.module.css';

import ModalConfirm from '../ModalConfirm/ModalConfirm';

import { actions as contactsAction, selectSelectedContact } from '../../store/contacts';
import { actions as toggleModalFormsAction } from '../../store/toggleModalForms';

import { actions, fieldsLabel } from '../../store';
import { selectOpenModalConfirm } from '../../store/toggleModalForms';

const {
  addFormLabel,
} = fieldsLabel;

const {
  confirmDelete,
  openAddModalForm,
} = actions;

const {
  toggleModalForm,
} = toggleModalFormsAction;

const {
  setSelectContact,
} = contactsAction;

const ContactInfo = (props) => {
  const {
    selectContact,
    openModalConfirm,
    setSelectContact,
    toggleModalForm,

    confirmDelete,
    openAddModalForm,
  } = props;

  const {
    id,
    firstName,
    lastName,
    phone,
  } = selectContact;

  const handleClose = () => {
    setSelectContact(null);
  };

  const handleEdit = () => {
    toggleModalForm(addFormLabel);
    openAddModalForm();
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
                    confirmDelete(false, id);
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
        />
      )}
    </div>
  )
};

const mapStateProps = (state) => {
  const selectContact = selectSelectedContact(state);
  const openModalConfirm = selectOpenModalConfirm(state);
  return {
    selectContact,
    openModalConfirm,
  }
};

export default connect(
  mapStateProps,
  {
    setSelectContact,
    toggleModalForm,
    confirmDelete,
    openAddModalForm,
  }
)(ContactInfo);
