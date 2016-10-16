const generateRandomString = require('./generate-random-string');

it('should have the correct length', () => {
  const length = 10;
  expect(generateRandomString(length).length).toBe(length);
});
