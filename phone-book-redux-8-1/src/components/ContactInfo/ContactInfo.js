import React from 'react';
import { connect } from 'react-redux';

import ContactInfoCSS from './ContactInfo.module.css';

import ModalConfirm from '../ModalConfirm/ModalConfirm';

import { actions as contactsAction } from '../../store/contacts';
import { actions as toggleModalFormsAction } from '../../store/toggleModalForms';

import { actions } from '../../store';

const {
  toggleModalConfirm,
} = actions;

const {
  toggleModalForm,
} = toggleModalFormsAction;

const {
  deleteSelectedContact,
  setSelectContact,
} = contactsAction;

const ContactInfo = (props) => {
  const {
    selectContact,
    openModalConfirm,
    setSelectContact,
    toggleModalForm,

    toggleModalConfirm,
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
                    toggleModalConfirm(false, id);
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
    toggleModalConfirm,
  }
};

export default connect(mapStateProps, mapDispatchToProps())(ContactInfo);
