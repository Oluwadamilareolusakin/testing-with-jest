const capitalize = require('../functions/capitalize.js');

test('capitalizes a word', () => {
  const word = capitalize('i am a boy');
  expect(word).toBe('I am a boy');
});