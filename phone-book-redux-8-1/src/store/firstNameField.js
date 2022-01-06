const SELECT = 'firstNameField/SELECT';
const SET_NULL = 'firstNameField/SET_NULL';


export const actions = {
  select: (contact) => ({ type: SELECT, contact }),
  setNull: () => ({ type: SET_NULL }),
};

const firstNameFieldReducer = (
  firstNameField = null,
  action,
) => {
  switch (action.type) {
    case SELECT:
      return action.contact;
    case SET_NULL:
      return null;
    default:
      return firstNameField;
  };
};

export default firstNameFieldReducer;
