const isAnagram = require('./anagram');

it('should return true if two words are anagrams', () => {
  expect(isAnagram('potato', 'oatpot')).toBe(true);
});

it('should return false if two words are not anagrams', () => {
  expect(isAnagram('potato', 'tomato')).toBe(false);
});

it('should ignore spaces', () => {
  expect(isAnagram('potato', 'po tato')).toBe(true);
});

it('should ignore numbers', () => {
  expect(isAnagram('potato', 'po9tato')).toBe(true);
});

it('should be case insensitive', () => {
  expect(isAnagram('potato', 'POTATO'));
});
