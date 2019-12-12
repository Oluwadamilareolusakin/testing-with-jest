const caesar = require('../functions/caesarsCypher');

test('It encrypts a string', () => {
  expect(caesar("adusijomp'e,  akmk'./a;ejhwihe", 3)).toBe("dgxvlmrps'h,  dnpn'./d;hmkzlkh");
})

test('It maintains character case', () => {
  expect(caesar("ABCDEFGH", 1)).toBe("BCDEFGHI");
})

test("It wraps from z - a and Z - A", () => {
  expect(caesar("Zz", 1)).toBe("Aa");
})