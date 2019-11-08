const cipher = require('./index');

test('cipher function exists', () => {
  expect(cipher).toBeDefined();
});

test('ciphers uppercase strings, example ABCD to BCDE', () => {
  expect(cipher('ABCD')).toEqual('BCDE');
});

test('ciphers lowercase strings abcd to bcde', () => {
  expect(cipher('abcd')).toEqual('bcde');
});

test('it keeps punctuation intact', () => {
  expect(cipher('abc!')).toEqual('bcd!');
});
