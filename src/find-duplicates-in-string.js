module.exports = (word) => {
  const letters = {};
  let result = '';

  for (const letter of word) {
    const count = letters[letter];
    letters[letter] = count ? count + 1 : 1;
  }

  for (const letter of Object.keys(letters)) {
    const count = letters[letter];
    if (count > 1) { result += letter; }
  }

  return result;
};
