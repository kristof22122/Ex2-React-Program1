const ADD = 'contacts/ADD';
const DELETE_SELECTED_CONTACT = 'contacts/DELETE_SELECTED_CONTACT';
const UPDATE = 'contacts/UPDATE';


export const actions = {
  add: (contact) => ({ type: ADD, contact }),
  deleteSelectedContact: (contact) => ({ type: DELETE_SELECTED_CONTACT, contact }),
  update: (contact) => ({ type: UPDATE, contact }),
};

const contactsReducer = (
  contacts = [],
  action,
) => {
  const {
    contact: actionContact,
  } = action;

  switch (action.type) {
    case ADD:
      if (Array.isArray(actionContact)) {
        return [...actionContact];
      };

      return [...contacts, actionContact];
    case DELETE_SELECTED_CONTACT:
      return contacts.filter(
        contact => contact.id !== actionContact);
    case UPDATE:
      const {
        id,
        firstName,
        lastName,
        phone,
      } = actionContact;

      return contacts.map(contact => {
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
      });
    default:
      return contacts;
  };
};

export default contactsReducer;
