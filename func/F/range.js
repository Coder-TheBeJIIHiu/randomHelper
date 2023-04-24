/**
 * Generates an array of numbers in a specified range.
 * @param {number} s - The start of the range (inclusive).
 * @param {number} e - The end of the range (inclusive).
 * @returns {number[]} An array of numbers in the specified range.
 */

module.exports = (s, e) => {
    const a = [];
    for (let i = s; i <= e; i++) {
      a.push(i);
    }
    return a;
  }
  