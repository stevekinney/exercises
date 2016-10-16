module.exports = (text, toReplace, replaceWith) => {
  let result = '';

  for (let letter of text) {
    result += (letter === toReplace) ? replaceWith : letter;
  }

  return result;
};
