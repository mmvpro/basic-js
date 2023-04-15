const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
   if (!date) {
    return 'Unable to determine the time of year!';
  }
  if(data.match(/^\d{4}-\d{2}-\d{2}$/)===null) {
    throw new Error("Invalid date!");
  }
  const m = date.getMonth();
  if (m === 11 || m < 2) {
    return 'winter';
  } else if (m < 5) {
    return 'spring';
  } else if (m < 8) {
    return 'summer';
  } else {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
