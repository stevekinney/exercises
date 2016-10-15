module.exports = (word) => {
  const letters = new Set();

  for (const letter of word) {
    if (letters.has(letter)) { return false; }
    letters.add(letter);
  }

  return true;
};
