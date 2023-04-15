const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  
    let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--double-prev") {
      if (Number.isInteger(arr[i - 1])) {
        res.push(arr[i - 1] * 2);
        i++;
      } else i++;
    }

    if (arr[i] === "--discard-prev") {
      if (Number.isInteger(arr[i - 1])) {
        i++;
      }
    }

    if (arr[i] === "--double-next") {
      if (Number.isInteger(arr[i + 1])) {
        res.push(arr[i - 1]);
        res.push(arr[i + 1] * 2);
        i += 2;
      } else i += 2;
    }

    if (arr[i] === "--discard-next") {
      if (Number.isInteger(arr[i + 1])) {
        res.push(arr[i - 1]);
        i += 2;
      }
    }

    if (
      Number.isInteger(arr[i]) &&
      typeof arr[i + 1] !== "string" &&
      typeof arr[i - 1]
    ) {
      res.push(arr[i]);
    }
  }

  return res;
}

module.exports = {
  transform
};
