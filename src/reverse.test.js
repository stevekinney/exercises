const reverse = require('./reverse');

it('should reverse a string', () => {
  expect(reverse('hello')).toBe('olleh');
});
