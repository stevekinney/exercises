const removeDuplicates = require('./remove-duplicates');

it('should return the same string if there are no duplicates', () => {
  expect(removeDuplicates('abcd')).toBe('abcd');
});

it('should remove any and all duplicate letters from a string', () => {
  expect(removeDuplicates('aaaa')).toBe('a');
  expect(removeDuplicates('aabb')).toBe('ab');
  expect(removeDuplicates('abababa')).toBe('ab');
});

it('should return null if the input is falsey', () => {
  expect(removeDuplicates()).toBe(null);
});
