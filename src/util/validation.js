export function validateStringNotEmpty(value) {
  if (typeof value !== 'string') {
    throw new Error('Invalid input type - must be a string.');
  } else if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  } else {
    return value;
  }
}

export function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error('Invalid number input.');
  } else {
    return number;
  }
}
