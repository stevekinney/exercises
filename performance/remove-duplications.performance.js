const path = require('path');
const fs = require('fs');

const removeDuplicates = require('../src/remove-duplicates');
const generateRandomString = require('../src/generate-random-string');

const logFile = path.join(__dirname, `generate-random-string.results-${Date.now()}.csv`);

const max = 100000;

for (let length = 1; length < max; length++) {
  let start = process.hrtime();
  generateRandomString(length)
  let end = process.hrtime(start);
  fs.appendFileSync(logFile, `${[length, end[1]]}\n`);
}
