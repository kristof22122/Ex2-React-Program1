const validatorBase = (value, message, conditionCallback) => {
  if (!Array.isArray(value)) {
    if (conditionCallback(value)) {
      return message;
    };
  } else {
    const valueKeys = Object.keys(value);

    for (const key of valueKeys) {
      if (conditionCallback(value[key])) {
        return message;
      };
    }
  }

  return undefined;
};

const noExclamationMark = (value) => {
  if (value !== null) {
    return value.includes('!');
  }

  return false;
}

const lengthMoreThenTen = (value) => {
  if (value !== null) {
    return value.length >= 10;
  }

  return false;
}

const lengthValidator = (value) => {
  return validatorBase(value, 'Value length >= 10', lengthMoreThenTen);
}

const exclamationMarkValidator = (value) => {
 return validatorBase(value, 'Exclamation Mark!', noExclamationMark);
}

export const validators = [
  exclamationMarkValidator,
  lengthValidator,
];
