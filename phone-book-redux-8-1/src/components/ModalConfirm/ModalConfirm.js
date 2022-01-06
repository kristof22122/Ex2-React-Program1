import React from 'react';
import ReactDOM from 'react-dom';

import ModalConfirmCSS from './ModalConfirm.module.css';

export const ModalConfirm = (props) => {
  const {
    toggleModalConfirm,
  } = props;

  const setYes = () => {
    toggleModalConfirm(true);
  };

  const setNo = () => {
    toggleModalConfirm(false);
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
