const SELECT = 'phoneField/SELECT';
const SET_NULL = 'phoneField/SET_NULL';


export const actions = {
  select: (contact) => ({ type: SELECT, contact }),
  setNull: () => ({ type: SET_NULL }),
};

const phoneFieldReducer = (
  phoneField = null,
  action,
) => {
  switch (action.type) {
    case SELECT:
      return action.contact;
    case SET_NULL:
      return null;
    default:
      return phoneField;
  };
};

export default phoneFieldReducer;
