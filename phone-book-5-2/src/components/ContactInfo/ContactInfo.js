import React, { useState } from 'react';

import ContactInfoCSS from './ContactInfo.module.css';

import { ModalAddForm } from '../ModalAddForm/ModalAddForm';
import { ModalConfirm } from '../ModalConfirm/ModalConfirm';

export const ContactInfo = (props) => {
  const {
    setSelectContact,
    deleteContact,
    openAddForm,
    setOpenAddForm,
    addContact,
    selectContact,
  } = props;
  
  const {
    id,
    firstName,
    lastName,
    phone,
  } = props.selectContact;

  const [ isDelete, setIsDelete ] = useState(false);

  const handleDelete = () => {
    setIsDelete(true);
  };

  const handleClose = () => {
    setSelectContact(null);
  };

  const handleEdit = () => {
    setOpenAddForm(true);
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
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={handleEdit}
                >
                  edit
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
      {openAddForm && (
        <ModalAddForm 
          addContact={addContact}
          setOpenAddForm={setOpenAddForm}
          selectContact={selectContact}
        />
      )}
      {isDelete && (
        <ModalConfirm
          setIsDelete={setIsDelete}
          deleteContact={deleteContact}
          deleteContactId={id}
          setSelectContact={setSelectContact}
        />
      )}
    </div>
  )
};
