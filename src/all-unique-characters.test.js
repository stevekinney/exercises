const hasAllUniqueCharacters = require('./all-unique-characters');

it('should return true if all of the characters in the string are unique', () => {
  expect(hasAllUniqueCharacters('abcd')).toBe(true);
});

it('should return false if not all of the characters in the string are unique', () => {
  expect(hasAllUniqueCharacters('aaa')).toBe(false);
});
