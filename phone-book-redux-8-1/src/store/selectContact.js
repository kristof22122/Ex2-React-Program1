const SET_SELECT_CONTACT = 'selectContact/SET_SELECT_CONTACT';

export const actions = {
  setSelectContact: (value) => ({ type: SET_SELECT_CONTACT, value})
};

const selectContactReducer = (
  selectContact = null,
  action,
) => {
  const {
    value,
  } = action;

  switch (action.type) {
    case SET_SELECT_CONTACT:
      if (value === null) {
        return null;
      };

      return { ...value };
    default:
      return selectContact;
  };
};

export default selectContactReducer;