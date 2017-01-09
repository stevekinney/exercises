const flatten = (array, output = []) => {
  for (let e of array) {
    Array.isArray(e) ? flatten(e, output) : output.push(e);
  }
  return output;
};

module.exports = flatten;
