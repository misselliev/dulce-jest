const calculator = require('./index');

test('calculator function exists', () => {
  expect(calculator).toBeDefined();
});

test('add 2 + 2', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('add 2 + (-3)', () => {
  expect(calculator.add(2, -3)).toBe(-1);
});

test('substract 2 - 2', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('substract 2 - (-2)', () => {
  expect(calculator.subtract(2, -2)).toBe(4);
});

test('multiply 2 * 3', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('divide 8/2', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});
