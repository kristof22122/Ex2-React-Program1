const SELECT = 'selectContact/SELECT';
const SET_NULL = 'selectContact/SET_NULL';


export const actions = {
  select: (contact) => ({ type: SELECT, contact }),
  setNull: () => ({ type: SET_NULL }),
};

const selectContactReducer = (
  selectContact = null,
  action,
) => {
  switch (action.type) {
    case SELECT:
      selectContact = {...action.contact};

      return selectContact;
    case SET_NULL:
      selectContact = null;

      return selectContact;
    default:
      return selectContact;
  };
};

export default selectContactReducer;