module.exports = (numbers) => {
  const { length } = numbers;

  for (let index = 0; index < length; index++) {
    const value = numbers[index];

    for (let previousIndex = index - 1; previousIndex >= 0; previousIndex--) {
      let previousValue = numbers[previousIndex];
      if (value > previousValue) { break; }
      numbers[previousIndex] = value;
      numbers[previousIndex + 1] = previousValue;
    }
  }

  return numbers;
};

