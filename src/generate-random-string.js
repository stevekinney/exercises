module.exports = (length) => {
  let result = '';

  for (let i = 0; i < length; i++) {
    const letter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    result += letter;
  }

  return result;
};
