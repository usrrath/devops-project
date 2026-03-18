const { sum, minus, multiply, divide } = require('../src/sum');

test('adds 1 + 2 = 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('minus 5 - 2 = 3', () => {
  expect(minus(5, 2)).toBe(3);
});

test('multiplies 2 * 3 = 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divides 10 / 2 = 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('divides by zero throws error', () => {
  expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
});
