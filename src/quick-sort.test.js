const quickSort = require('./quick-sort');

xit('should sort some numbers', () => {
  expect(quickSort([6,1,5,2,4,3])).toEqual([1,2,3,4,5,6]);
});
