module.exports = (word) => {
  const { length } = word;
  let result = '';

  for (let i = length - 1; i >= 0; i--) {
    result += word[i];
  }

  return result;
};
