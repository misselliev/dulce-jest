const reverse = require('./index');

test('reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('reverse reverses a string', () => {
  expect(reverse('abcde')).toEqual('edcba');
});

test('reverse reverses a string', () => {
  expect(reverse('ab ab')).toEqual('ba ba');
});
