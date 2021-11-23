import React from 'react';
import ReactDOM from 'react-dom';

import ModalConfirmCSS from './ModalConfirm.module.css';

export const ModalConfirm = (props) => {
  const {
    setIsDelete,
    deleteContactId,
    deleteContact,
    setSelectContact,
  } = props;

  const setYes = () => {
    setSelectContact(null);
    deleteContact(deleteContactId);
    setIsDelete(false);
  };

  const setNo = () => {
    setIsDelete(false);
  }

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
            onClick={setYes}
          >
            Yes
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={setNo}
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modalConfirm')
  )
};
