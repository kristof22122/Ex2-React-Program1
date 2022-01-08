const SET_FIRST_NAME_FIELD = 'firstNameField/SET_FIRST_NAME_FIELD'


export const actions = {
  setFirstNameField: (value) => ({ type: SET_FIRST_NAME_FIELD, value }),
};

const firstNameFieldReducer = (
  firstNameField = null,
  action,
) => {
  switch (action.type) {
    case SET_FIRST_NAME_FIELD:
      return action.value;
    default:
      return firstNameField;
  };
};

export default firstNameFieldReducer;
