module.exports = (first, second) => {
  if (!first || !second) { return false; }

  const firstWord = first.toLowerCase();
  const secondWord = second.toLowerCase();

  const firstWordLetters = (new Array(26)).fill(0);
  const secondWordLetters = (new Array(26)).fill(0);

  const start = 97;
  const end = 97 + 26;

  for (let i = 0; i < firstWord.length; i++) {
    const code = firstWord.charCodeAt(i);
    if (code >= start && code <= end) {
      firstWordLetters[code - 97]++;
    }
  }

  for (let i = 0; i < secondWord.length; i++) {
    const code = secondWord.charCodeAt(i);
    if (code >= start && code <= end) {
      secondWordLetters[code - 97]++;
    }
  }

  for (let i = 0; i < firstWordLetters.length; i++) {
    if (firstWordLetters[i] !== secondWordLetters[i]) { return false; }
  }

  return true;
};

// Notes: research V8 inlining.
