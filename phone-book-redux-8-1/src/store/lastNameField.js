const SELECT = 'lastNameField/SELECT';
const SET_NULL = 'lastNameField/SET_NULL';


export const actions = {
  select: (contact) => ({ type: SELECT, contact }),
  setNull: () => ({ type: SET_NULL }),
};

const lastNameFieldReducer = (
  lastNameField = null,
  action,
) => {
  switch (action.type) {
    case SELECT:
      return action.contact;
    case SET_NULL:
      return null;
    default:
      return lastNameField;
  };
};

export default lastNameFieldReducer;
