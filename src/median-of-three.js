module.exports = (a, b, c) => {
  if (b < a) {
    let temp = a;
    a = b;
    b = temp;
  }

  if (c < a) {
    let temp = a;
    a = c;
    c = temp;
  }

  if (c < b) {
    let temp = b;
    b = c;
    c = temp;
  }

  return b;
};
