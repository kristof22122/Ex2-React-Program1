const SET_FIRST_NAME_ERROR = 'firstNameError/SET_FIRST_NAME_ERROR';

export const actions = {
  setFirstNameError: (value) => ({ type: SET_FIRST_NAME_ERROR, value }),
};

const firstNameErrorReducer = (
  firstNameError = false,
  action,
) => {
  switch (action.type) {
    case SET_FIRST_NAME_ERROR:
      return action.value;
    default:
      return firstNameError;
  };
};

export default firstNameErrorReducer;
