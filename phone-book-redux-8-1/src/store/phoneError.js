const SET_PHONE_ERROR = 'phoneError/SET_PHONE_ERROR';

export const actions = {
  setPhoneError: (value) => ({ type: SET_PHONE_ERROR, value }),
};

const phoneErrorReducer = (
  phoneError = false,
  action,
) => {
  switch (action.type) {
    case SET_PHONE_ERROR:
      return action.value;
    default:
      return phoneError;
  };
};

export default phoneErrorReducer;
