const SET_FIRST_NAME_FIELD = 'modalAddForm/SET_FIRST_NAME_FIELD';
const SET_FIRST_NAME_ERROR = 'modalAddForm/SET_FIRST_NAME_ERROR';
const SET_LAST_NAME_FIELD = 'modalAddForm/SET_LAST_NAME_FIELD';
const SET_LAST_NAME_ERROR = 'modalAddForm/SET_LAST_NAME_ERROR';
const SET_PHONE_FIELD = 'modalAddForm/SET_PHONE_FIELD';
const SET_PHONE_ERROR = 'modalAddForm/SET_PHONE_ERROR';

export const actions = {
  setFirstNameField: (value) => ({ type: SET_FIRST_NAME_FIELD, value }),
  setFirstNameError: (value) => ({ type: SET_FIRST_NAME_ERROR, value }),
  setLastNameField: (value) => ({ type: SET_LAST_NAME_FIELD, value }),
  setLastNameError: (value) => ({ type: SET_LAST_NAME_ERROR, value }),
  setPhoneField: (value) => ({ type: SET_PHONE_FIELD, value }),
  setPhoneError: (value) => ({ type: SET_PHONE_ERROR, value }),
};

const modalAddFormDefaultValues = {
  firstNameField: null,
  firstNameError: false,
  lastNameField: null,
  lastNameError: false,
  phoneField: null,
  phoneError: false,
}

const modalAddFormFieldsReducer = (
  modalAddFormValues = modalAddFormDefaultValues,
  action,
) => {
  switch (action.type) {
    case SET_FIRST_NAME_FIELD:
      return {
        ...modalAddFormValues,
        firstNameField: action.value,
      };
    case SET_FIRST_NAME_ERROR:
      return {
        ...modalAddFormValues,
        firstNameError: action.value,
      };
    case SET_LAST_NAME_FIELD:
      return {
        ...modalAddFormValues,
        lastNameField: action.value,
      };
    case SET_LAST_NAME_ERROR:
      return {
        ...modalAddFormValues,
        lastNameError: action.value,
      };
    case SET_PHONE_FIELD:
      return {
        ...modalAddFormValues,
        phoneField: action.value,
      };
    case SET_PHONE_ERROR:
      return {
        ...modalAddFormValues,
        phoneError: action.value,
      };
    default:
      return modalAddFormValues;
  };
};

export default modalAddFormFieldsReducer;