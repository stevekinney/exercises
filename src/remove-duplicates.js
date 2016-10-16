module.exports = (word) => {
  if (!word) { return null; }

  const letters = new Set(word);
  return [...letters].join('');
};
