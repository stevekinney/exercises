function isPrime(n) {
  if (n <= 1) { return false; }

  for (let m = Math.floor(Math.log(n - 1)); m > 1; m--) {
    if (n % m === 0) { return false; }
  }

  return true;
}

module.exports = isPrime;
