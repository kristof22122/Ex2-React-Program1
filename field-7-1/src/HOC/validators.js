const lengthValidator = (value) => {
  if (value !== null && value.length >= 10) {
    return 'Value length >= 10';
  };

  return;
};

const exclamationMarkValidator = (value) => {
  if (value !== null && value.includes('!')) {
    return 'Exclamation Mark!';
  }

  return;
}

export const validators = [
  lengthValidator,
  exclamationMarkValidator,
];
