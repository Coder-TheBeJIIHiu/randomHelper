const I = require("./int.js");

/**
 * Generates an array of random integers between m and M (exclusive).
 * @param {number} m - The minimum value (inclusive) for the generated integers.
 * @param {number} M - The maximum value (exclusive) for the generated integers.
 * @param {number} s - The number of integers to generate.
 * @returns {number[]} An array of s random integers between m and M (exclusive).
 * @throws {Error} If m or M are not integers, if m is greater than or equal to M, or if s is not a positive integer.
 */

module.exports = (m, M, s) => {
  if (!Number.isInteger(m) || !Number.isInteger(M)) {
    throw new Error("m and M must be integers");
  }

  if (m >= M) {
    throw new Error("m must be less than M");
  }

  if (!Number.isInteger(s) || s <= 0) {
    throw new Error("s must be a positive integer");
  }

  const R = [];
  for (let i = 0; i < s; i++) {
    const j = I(m, M);
    R.push(j);
  }
  return R;
};
