const SET_LAST_NAME_FIELD = 'lastNameField/SET_LAST_NAME_FIELD';


export const actions = {
  setLastNameField: (value) => ({ type: SET_LAST_NAME_FIELD, value }),
};

const lastNameFieldReducer = (
  lastNameField = null,
  action,
) => {
  switch (action.type) {
    case SET_LAST_NAME_FIELD:
      return action.value;
    default:
      return lastNameField;
  };
};

export default lastNameFieldReducer;
