import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactInfoCSS from './ContactInfo.module.css';

import { ModalConfirm } from '../ModalConfirm/ModalConfirm';

import { actions as selectContactAction } from '../../store/selectContact';
import { actions as openModalConfirmAction } from '../../store/openModalConfirm';
import { getOpenModalConfirm, getSelectContact } from '../../store';

import { actions as contactsAction } from '../../store/contacts';

import { requestDelete } from '../../api';

const {
  deleteSelectedContact,
} = contactsAction;

export const ContactInfo = (props) => {
  const {
    toggleAddModal,
  } = props;

  const dispatch = useDispatch();
  
  const {
    setSelectContact,
  } = selectContactAction;

  const {
    toggle,
  } = openModalConfirmAction;

  const selectContact = useSelector(getSelectContact);

  const openModalConfirm = useSelector(getOpenModalConfirm);

  const {
    id,
    firstName,
    lastName,
    phone,
  } = selectContact;

  const toggleModalConfirm = useCallback((choice) => {
    if (choice) {
      requestDelete(id);
      dispatch(deleteSelectedContact(id));
      dispatch(setSelectContact(null));
    };

    dispatch(toggle());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    dispatch(setSelectContact(null));
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
