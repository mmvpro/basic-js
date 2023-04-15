const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = "";
  let n = 1;
  let char = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      n++;
      char = str[i];
      continue;
    }
  
    res += n !== 1 ? n : "";
    n = 1;
    res += char;
    char = "";
    if (str[i + 1] !== str[i]) res += str[i];
  }
 
  
    res += n !== 1 ? n : "";
    res += char

  return res;
}

module.exports = {
  encodeLine
};
