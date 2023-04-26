/**
 * A collection of utility functions.
 * @namespace F
 */

const range = require("./F/range.js");
const chunk = require("./F/chunk.js");
const sortby = require("./F/sortby.js");
const debounced = require("./F/debounced.js");
const drop = require("./F/drop.js");

/**
 * Generates an array of numbers in a specified range.
 * @memberof F
 * @function range
 * @param {number} s - The start of the range (inclusive).
 * @param {number} e - The end of the range (inclusive).
 * @returns {number[]} An array of numbers in the specified range.
 */
const rangeFunc = (s, e) => range(s, e);

/**
 * Chunks an array into smaller arrays of a specified size.
 * @memberof F
 * @function chunk
 * @param {Array} a - The array to chunk.
 * @param {number} s - The size of each chunk.
 * @returns {Array[]} An array of smaller arrays, each of size `s`.
 * 
 * @throws {Error} If `s` is not a number or is NaN.
 * @throws {Error} If `e` is not a number or is NaN.
 * @throws {Error} If `e` is less than `s`.
 */
const chunkFunc = (a, s) => chunk(a, s);

/**
 * Sorts an array of objects by a given property, with optional sorting options.
 * @memberof F
 * @function sortby
 * @param {Array} arr - The array of objects to sort.
 * @param {Object} [o] - Optional sorting options.
 * @param {string} [o.sortby] - The property to sort by.
 * @param {boolean} [o.reverse] - Whether to sort in reverse order.
 * @param {boolean} [o.numeric] - Whether to sort numbers as numbers (default is false).
 * @returns {Array} The sorted array of objects.
 * @throws {TypeError} If `arr` is not an array or `options` is not an object.
 * @throws {TypeError} If `sortby` is specified but is not a string.
 * @throws {TypeError} If `reverse` or `numeric` is specified but is not a boolean.
 */
const sortByFunc = (arr, options = {}) => sortby(arr, options);

/**
 * Limits the rate at which a function can be called.
 * @memberof F 
 * @function debounced
 * @param {Function} f - The function to debounce.
 * @param {number} t - The number of milliseconds to delay.
 * @param {Object} [o={}] - The options object.
 * @param {boolean} [o.immediate=false] - Whether to execute the function immediately on the leading edge instead of the trailing edge.
 * @param {Object} [o.context=null] - The context to bind to the debounced function.
 * @returns {Function} - The debounced function.
 */
const debouncedFunc = (f, t, o = {}) => debounced(f, t, o);

/**
 * Selects a random item from an array of objects with a weighted probability based on the "dropChance" property.
 * @memberof F
 * @function drop
 * @param {Array<Object>} a - The array of objects to choose from. Each object must have a "dropChance" property that
 * represents the probability of that object being selected. The sum of all "dropChance" values in the array should be 1.
 * @returns {number} - The index of the selected item in the array, or -1 if no item was selected.
 * @throws {TypeError} - If the argument is not an array or contains objects without a "dropChance" property.
 */
const dropFunc = (a) => drop(a);

const F = {
  range: rangeFunc,
  chunk: chunkFunc,
  sortBy: sortByFunc,
  debounced: debouncedFunc,
  drop: dropFunc
}

module.exports = F
