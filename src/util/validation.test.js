import { it, expect } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './validation';

it('should throw an error if input isn\'t typeof string', () => {
  const input = 1;

  expect(() => validateStringNotEmpty(input)).toThrowError();
});

it('should throw an error if string is empty', () => {
  const input = '';

  expect(() => validateStringNotEmpty(input)).toThrowError();
});

it('should return a string if string isn\'t empty', () => {
  const input = 'a';

  const result = validateStringNotEmpty(input);

  expect(result).toBe(input);
});

it('should throw an error if input is NaN', () => {
  const input = 'invalid';

  expect(() => validateNumber(input)).toThrowError();
});

it('should return a number if input isn\'t NaN', () => {
  const input = 1;

  const result = validateNumber(input);

  expect(result).toBeTypeOf('number');
});
