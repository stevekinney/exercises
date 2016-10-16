const findDuplicates = require('./find-duplicates-in-string');

it('should return a string with all of the duplicate letters in a string', () => {
  expect(findDuplicates('poodle')).toBe('o');
  expect(findDuplicates('aabbc')).toBe('ab');
});
