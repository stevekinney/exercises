const replaceCharacter = require('./replace-character');

it('should replace all instances of the second argument with the third', () => {
  expect(replaceCharacter('hello world', ' ', '%20')).toBe('hello%20world');
});
