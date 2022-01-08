const TOGGLE = 'openAddForm/TOGGLE';

export const actions = {
  toggle: () => ({ type: TOGGLE }),
};

const openAddFormReducer = (
  openAddForm = false,
  action,
) => {
  switch (action.type) {
    case TOGGLE:
      return !openAddForm;
    default:
      return openAddForm;
  };
};

export default openAddFormReducer;