const ADD = 'contactsValues/ADD';
const DELETE_SELECTED_CONTACT = 'contactsValues/DELETE_SELECTED_CONTACT';
const UPDATE = 'contactsValues/UPDATE';

const SET_SELECT_CONTACT = 'contactsValues/SET_SELECT_CONTACT';


export const actions = {
  add: (contact) => ({ type: ADD, contact }),
  deleteSelectedContact: (contact) => ({ type: DELETE_SELECTED_CONTACT, contact }),
  update: (contact) => ({ type: UPDATE, contact }),
  setSelectContact: (value) => ({ type: SET_SELECT_CONTACT, value})
};

const contactsDefaultValue = {
  contacts: [],
  selectContact: null,
}

const contactsReducer = (
  contactsValues = contactsDefaultValue,
  action,
) => {
  const {
    contact: actionContact,
    value,
  } = action;

  const {
    contacts,
  } = contactsValues;

  switch (action.type) {
    case ADD:
      if (Array.isArray(actionContact)) {
        return {
          ...contactsValues,
          contacts: [...actionContact]
        };
      };

      return {
        ...contactsValues,
        contacts: [...contacts, actionContact]
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...contactsValues,
        contacts: contacts.filter(
        contact => contact.id !== actionContact)
      };
    case UPDATE:
      const {
        id,
        firstName,
        lastName,
        phone,
      } = actionContact;

      return {
        ...contactsValues,
        contacts: contacts.map(contact => {
        const {
          id: contactId,
        } = contact;

        if (contactId === id) {
          const updateContactInfo = {
            id,
            firstName,
            lastName,
            phone,
          };

          return updateContactInfo;
        };

        return contact;
      })};
    case SET_SELECT_CONTACT:
        if (value === null) {
          return {
            ...contactsValues,
            selectContact: null,
          };
        };

        return {
          ...contactsValues,
          selectContact: { ...value },
        };
    default:
      return contactsValues;
  };
};

export default contactsReducer;
