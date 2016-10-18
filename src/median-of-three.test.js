const medianOfThree = require('./median-of-three');

it('should return the median when it is the first argument', () => {
  expect(medianOfThree(2,1,3)).toBe(2);
});

it('should return the median when it is the second argument', () => {
  expect(medianOfThree(1,2,3)).toBe(2);
});

it('should return the median when it is the third argument', () => {
  expect(medianOfThree(1,3,2)).toBe(2);
});
