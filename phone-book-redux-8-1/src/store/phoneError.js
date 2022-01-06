const SET_VALUE = 'phoneError/SET_VALUE';

export const actions = {
  setValue: (value) => ({ type: SET_VALUE, value }),
};

const phoneErrorReducer = (
  phoneError = false,
  action,
) => {
  switch (action.type) {
    case SET_VALUE:
      return action.value;
    default:
      return phoneError;
  };
};

export default phoneErrorReducer;
