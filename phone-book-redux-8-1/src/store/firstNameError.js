// const SET_TRUE = 'firstNAmeError/SET_TRUE';
// const SET_FALSE = 'firstNAmeError/SET_FALSE';
const SET_VALUE = 'firstNameError/SET_VALUE';

export const actions = {
  setValue: (value) => ({ type: SET_VALUE, value }),
};

const firstNameErrorReducer = (
  firstNameError = false,
  action,
) => {
  switch (action.type) {
    case SET_VALUE:
      return action.value;
    default:
      return firstNameError;
  };
};

export default firstNameErrorReducer;
