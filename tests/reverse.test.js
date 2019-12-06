const reverse = require('../functions/reverse');

test('It reverses a string', () => {
  expect(reverse('I am a boy')).toEqual('yob a ma I');
})