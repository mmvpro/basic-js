const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const res = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      let n = 0;
      for (let ii = i - 1; ii <= i + 1; ii++) {
        for (let jj = j - 1; jj <= j + 1; jj++) {
          if (ii >= 0 && ii < numRows && jj >= 0 && jj < numCols && !(ii === i && jj === j) && matrix[ii][jj]) {
            n++;
          }
        }
      }
      row.push(n);
    }
    res.push(row);
  }

  return res;
}

module.exports = {
  minesweeper
};
