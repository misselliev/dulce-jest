const capitalize = require('./index');

test('capitalize function exists', () => {
  expect(capitalize).toBeDefined();
});

test('capitalize capitalizes a string', () => {
  expect(capitalize('abcde')).toEqual('Abcde');
});

test('capitalize capitalizes a string', () => {
  expect(capitalize('dulce')).toEqual('Dulce');
});
