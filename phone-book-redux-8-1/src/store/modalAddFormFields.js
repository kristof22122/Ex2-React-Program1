const SET_FORM_FIELD = 'modalAddForm/SET_FORM_FIELD';

export const actions = {
  setFormField: (value, fieldName) => ({ type: SET_FORM_FIELD, value, fieldName})
};

const modalAddFormDefaultValues = {
  firstNameField: null,
  firstNameError: false,
  lastNameField: null,
  lastNameError: false,
  phoneField: null,
  phoneError: false,
}

export const selectFirstNameField = (state) => {
  return state.modalAddFormValues.firstNameField;
}
export const selectFirstNameError = (state) => {
  return state.modalAddFormValues.firstNameError;
}
export const selectLastNameField = (state) => {
  return state.modalAddFormValues.lastNameField;
}
export const selectLastNameError = (state) => {
  return state.modalAddFormValues.lastNameError;
}
export const selectPhoneField = (state) => {
  return state.modalAddFormValues.phoneField;
}
export const selectPhoneError = (state) => {
  return state.modalAddFormValues.phoneError;
}

const modalAddFormFieldsReducer = (
  modalAddFormValues = modalAddFormDefaultValues,
  action,
) => {
  const {
    value,
    fieldName,
  } = action;

  switch (action.type) {
    case SET_FORM_FIELD:

      return {
        ...modalAddFormValues,
        [fieldName]: value,
      };
    default:
      return modalAddFormValues;
  };
};

export default modalAddFormFieldsReducer;
