module.exports = (first, second) => {
  return first.split('').sort().join() === second.split('').sort().join();
};
