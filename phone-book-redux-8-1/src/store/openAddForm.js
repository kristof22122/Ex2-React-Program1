const SET_TRUE = 'openAddForm/SET_TRUE';
const SET_FALSE = 'openAddForm/SET_FALSE';
const TOGGLE = 'openAddForm/TOGGLE';


export const actions = {
  setTrue: () => ({ type: SET_TRUE }),
  setFalse: () => ({ type: SET_FALSE }),
  toggle: () => ({ type: TOGGLE }),
};

const openAddFormReducer = (
  openAddForm = false,
  action,
) => {
  switch (action.type) {
    case SET_TRUE:
      openAddForm = true;
      
      return openAddForm;
    case SET_FALSE:
      openAddForm = false;

      return openAddForm;
    case TOGGLE:
      openAddForm = !openAddForm;

      return openAddForm;
    default:
      return openAddForm;
  };
};

export default openAddFormReducer;