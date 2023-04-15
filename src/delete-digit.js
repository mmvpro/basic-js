const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let max = 0;
  const nStr = n+"";
  for (let i = 0; i < nStr.length; i++) {
    const sum = parseInt(nStr.substring(0, i) + nStr.substring(i + 1));
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
