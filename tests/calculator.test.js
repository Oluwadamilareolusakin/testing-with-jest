const calculator = require('../functions/calculator');
jest.mock('../functions/calculator')


test('It adds two numbers together', () => {
  const calc = calculator();
  const result = calc.add(2,3);
  expect(result).toEqual(5);
})


test('It subtracts one number from another', () => {
  const calc = calculator();
  const result = calc.subtract(2,3);
  expect(result).toEqual(-1);
})

test('It multiplies one number by another', () => {
  const calc = calculator();
  const result = calc.multiply(2,3);
  expect(result).toEqual(6);
})

test('It divides one number by another', () => {
  const calc = calculator();
  const result = calc.divide(6,3);
  expect(result).toEqual(2);
})
