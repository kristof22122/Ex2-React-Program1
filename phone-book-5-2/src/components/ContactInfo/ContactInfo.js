import React, { useState, useCallback } from 'react';

import ContactInfoCSS from './ContactInfo.module.css';

import { ModalConfirm } from '../ModalConfirm/ModalConfirm';

export const ContactInfo = (props) => {
  const {
    deleteContact,
    selectContact,
    toggleAddModal,
    setSelectContact,
  } = props;
  
  const {
    id,
    firstName,
    lastName,
    phone,
  } = selectContact;

  const [ openModalConfirm, setOpenModalConfirm ] = useState(false);

  const toggleModalConfirm = useCallback((choice) => {
    if (choice) {
      deleteContact(id);
      setSelectContact(null);
    };
    
    setOpenModalConfirm((current) => !current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setSelectContact(null);
  };

  const handleEdit = () => {
    toggleAddModal();
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
