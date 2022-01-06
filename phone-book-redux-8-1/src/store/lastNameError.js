const SET_VALUE = 'lastNameError/SET_VALUE';

export const actions = {
  setValue: (value) => ({ type: SET_VALUE, value }),
};

const lastNameErrorReducer = (
  lastNameError = false,
  action,
) => {
  switch (action.type) {
    case SET_VALUE:
      return action.value;
    default:
      return lastNameError;
  };
};

export default lastNameErrorReducer;
