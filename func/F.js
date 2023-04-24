const range = require("./F/range.js")

/**
 * Generates an array of numbers in a specified range.
 * @param {number} s - The start of the range (inclusive).
 * @param {number} e - The end of the range (inclusive).
 * @returns {number[]} An array of numbers in the specified range.
 */

const F = {
    range: (s, e) => range(s, e)
};
  
module.exports = F;