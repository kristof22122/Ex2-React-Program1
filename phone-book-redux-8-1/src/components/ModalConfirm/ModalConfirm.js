import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import ModalConfirmCSS from './ModalConfirm.module.css';

import { actions } from '../../store';
import { selectSelectedContact } from '../../store/contacts';

const {
  confirmDelete,
} = actions;

const ModalConfirm = (props) => {
  const {
    selectContact,
    confirmDelete,
  } = props

  const {
    id,
  } = selectContact;

  const handleClick = (choice, id) => {
    confirmDelete(choice, id);
  };

  return ReactDOM.createPortal(
    <div
      className={ModalConfirmCSS.wrapper}
    >
      <div
        className={ModalConfirmCSS.confirm}
      >
        <h2
          className={ModalConfirmCSS.confirm__title}
        >
          Are you sure you want to delete the contact?
        </h2>
        <div
          className={ModalConfirmCSS.confirm__buttons}
        >
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              handleClick(true, id)
            }}
          >
            Yes
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              handleClick(false, id)
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modalConfirm')
  )
};

const mapStateProps = (state) => {
  const selectContact = selectSelectedContact(state);

  return {
    selectContact,
  }
};

export default connect(mapStateProps, { confirmDelete })(ModalConfirm);
