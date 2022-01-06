const TOGGLE = 'openModalConfirm/TOGGLE';

export const actions = {
  toggle: () => ({ type: TOGGLE }),
};

const openModalConfirmReducer = (
  openAddForm = false,
  action,
) => {
  switch (action.type) {
    case TOGGLE:
      openAddForm = !openAddForm;

      return openAddForm;
    default:
      return openAddForm;
  };
};

export default openModalConfirmReducer;