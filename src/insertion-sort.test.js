const insertionSort = require('./insertion-sort');

it('should sort some numbers', () => {
  expect(insertionSort([6,1,5,2,4,3])).toEqual([1,2,3,4,5,6]);
});
