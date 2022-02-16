import { createSelector } from "reselect";

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

const selectFirstNameField = (state) => {
  return state.modalAddFormValues.firstNameField;
}
const selectFirstNameError = (state) => {
  return state.modalAddFormValues.firstNameError;
}
const selectLastNameField = (state) => {
  return state.modalAddFormValues.lastNameField;
}
const selectLastNameError = (state) => {
  return state.modalAddFormValues.lastNameError;
}
const selectPhoneField = (state) => {
  return state.modalAddFormValues.phoneField;
}
const selectPhoneError = (state) => {
  return state.modalAddFormValues.phoneError;
}

export const reselectFirstNameField = createSelector(
  selectFirstNameField,
  (firstNameField) => {
    return firstNameField;
  }
);
export const reselectFirstNameError = createSelector(
  selectFirstNameError,
  (firstNameError) => {
    return firstNameError;
  }
);
export const reselectLastNameField = createSelector(
  selectLastNameField,
  (lastNameField) => {
    return lastNameField;
  }
);
export const reselectLastNameError = createSelector(
  selectLastNameError,
  (lastNameError) => {
    return lastNameError;
  }
);
export const reselectPhoneField = createSelector(
  selectPhoneField,
  (phoneField) => {
    return phoneField;
  }
);
export const reselectPhoneError = createSelector(
  selectPhoneError,
  (phoneError) => {
    return phoneError;
  }
);



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
