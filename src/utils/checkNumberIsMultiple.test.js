import { checkNumberIsMultiple } from './checkNumberIsMultiple'

test('checks number is a multiple and returns true if so', () => {
  expect(checkNumberIsMultiple(4, 2)).toBe(true);
});

test('checks number is a multiple and returns false if not', () => {
  expect(checkNumberIsMultiple(4, 3)).toBe(false);
});