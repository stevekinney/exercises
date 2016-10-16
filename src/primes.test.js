const isPrime = require('./primes');

it('should return false if the number is not a prime', () => {
  expect(isPrime(33)).toBe(false);
});

it('should return true if the number is a prime', () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(449)).toBe(true);
});

it('should return false if the number <= 1', () => {
  expect(isPrime(0)).toBe(false);
  expect(isPrime(1)).toBe(false);
});
