import { createSelector } from "reselect";

const TOGGLE = 'toggleModalForms/TOGGLE';

export const actions = {
  toggleModalForm: (modalForm) => ({ type: TOGGLE, modalForm }),
};

const selectOpenAddForm = (state) => {
  return state.toggleModalFormsValues.openAddForm;
};

const selectOpenModalConfirm = (state) => {
  return state.toggleModalFormsValues.openModalConfirm;
};

export const reselectOpenAddForm = createSelector(
  selectOpenAddForm,
  (openAddForm) => {
    return openAddForm;
  }
);

export const reselectOpenModalConfirm = createSelector(
  selectOpenModalConfirm,
  (openModalConfirm) => {
    return openModalConfirm;
  }
);

const toggleModalFormsDefaultValues = {
  openAddForm: false,
  openModalConfirm: false,
}

const toggleModalFormsReducer = (
  toggleModalFormsValues = toggleModalFormsDefaultValues,
  action,
) => {
  const {
    modalForm,
  } = action;

  const {
    openAddForm,
    openModalConfirm,
  } = toggleModalFormsValues;

  switch (action.type) {
    case TOGGLE:
      if (modalForm === 'addForm')
      return {
        ...toggleModalFormsValues,
        openAddForm: !openAddForm
      };

      if (modalForm === 'confirmForm')
      return {
        ...toggleModalFormsValues,
        openModalConfirm: !openModalConfirm,
      }

      return;
    default:
      return toggleModalFormsValues;
  };
};

export default toggleModalFormsReducer;