const SET_LAST_NAME_ERROR = 'lastNameError/SET_LAST_NAME_ERROR';

export const actions = {
  setLastNameError: (value) => ({ type: SET_LAST_NAME_ERROR, value }),
};

const lastNameErrorReducer = (
  lastNameError = false,
  action,
) => {
  switch (action.type) {
    case SET_LAST_NAME_ERROR:
      return action.value;
    default:
      return lastNameError;
  };
};

export default lastNameErrorReducer;
