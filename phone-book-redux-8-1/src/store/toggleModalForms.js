const TOGGLE = 'toggleModalForms/TOGGLE';

export const actions = {
  toggleModalForm: (modalForm) => ({ type: TOGGLE, modalForm }),
};

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