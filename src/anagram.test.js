const isAnagram = require('./anagram');

it('should return true if two words are anagrams', () => {
  expect(isAnagram('potato', 'oatpot')).toBe(true);
});

it('should return false if two words are not anagrams', () => {
  expect(isAnagram('potato', 'tomato')).toBe(false);
});
