const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

    options = options || {repeatTimes: 1, separator: '+', addition: '', additionRepeatTimes: 1, additionSeparator: '|'}
    let repeatedAddition = ''; 
    if (options.addition !== undefined) { 
      let addition = String(options.addition); 
      let additionSeparator = options.additionSeparator || '|'; 
      let additionRepeatTimes = options.additionRepeatTimes || 1; 
      let additionArray = new Array(additionRepeatTimes).fill(addition); 
      repeatedAddition = additionArray.join(additionSeparator); 
    }
    let separator = options.separator || '+'; 
    let repeatTimes = options.repeatTimes || 1; 
    let repeatedString = new Array(repeatTimes).fill(str + repeatedAddition).join(separator); 
    return repeatedString; 
  
  


 

}

module.exports = {
  repeater
};
