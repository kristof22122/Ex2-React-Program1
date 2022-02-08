import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import ModalConfirmCSS from './ModalConfirm.module.css';

import { actions } from '../../store';

const {
  toggleModalConfirm,
} = actions;

const ModalConfirm = (props) => {
  const {
    selectContact,
    toggleModalConfirm,
  } = props

  const {
    id,
  } = selectContact;

  const handleClick = (choice, id) => {
    toggleModalConfirm(choice, id);
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
  return {
    selectContact: state.contactsValues.selectContact,
  }
};

export default connect(mapStateProps, { toggleModalConfirm })(ModalConfirm);