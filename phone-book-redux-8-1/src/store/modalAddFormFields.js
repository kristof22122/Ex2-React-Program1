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
      if (fieldName === 'firstNameField') {
        return {
          ...modalAddFormValues,
          firstNameField: value,
        };
      };
      
      if (fieldName === 'firstNameError') {
        return {
          ...modalAddFormValues,
          firstNameError: value,
        };
      };

      if (fieldName === 'lastNameField') {
        return {
          ...modalAddFormValues,
          lastNameField: value,
        };
      };

      if (fieldName === 'lastNameError') {
        return {
          ...modalAddFormValues,
          lastNameError: value,
        };
      };

      if (fieldName === 'phoneField') {
        return {
          ...modalAddFormValues,
          phoneField: value,
        };
      };

      if (fieldName === 'phoneError') {
        return {
          ...modalAddFormValues,
          phoneError: value,
        };
      };

      return;
    default:
      return modalAddFormValues;
  };
};

export default modalAddFormFieldsReducer;
