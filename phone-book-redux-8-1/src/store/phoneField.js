const SET_PHONE_FIELD = 'phoneField/SET_PHONE_FIELD';


export const actions = {
  setPhoneField: (value) => ({ type: SET_PHONE_FIELD, value }),
};

const phoneFieldReducer = (
  phoneField = null,
  action,
) => {
  switch (action.type) {
    case SET_PHONE_FIELD:
      return action.value;
    default:
      return phoneField;
  };
};

export default phoneFieldReducer;
