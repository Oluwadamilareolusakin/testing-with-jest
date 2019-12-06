const analyze = require('../functions/analyse');

test('It returns the length, max, min and average of an array', () => {
  expect(analyze([1,2,3,4,5])).toEqual({min: 1, max: 5, average: 3, length: 5});
})