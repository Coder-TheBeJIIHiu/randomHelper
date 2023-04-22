const I = require("./int.js");

/**
 * Returns a random element from an array.
 * @param {Array} a - The array to get a random element from.
 * @returns {*} A random element from the array, or undefined if the array is empty.
 */
module.exports = (a = []) => {
  if (a.length === 0) {
    return undefined;
  }
  return a[I(0, a.length)];
}
