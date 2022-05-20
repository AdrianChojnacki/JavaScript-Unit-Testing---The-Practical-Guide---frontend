import { it, expect } from 'vitest';

import { transformToNumber } from './numbers';

it('should yield number if provided with number string', () => {
  const number = '1';

  const result = transformToNumber(number);

  expect(result).toBe(Number(number));
});

it('should yield NaN if provided with non-number string', () => {
  const input = 'invalid';

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});
