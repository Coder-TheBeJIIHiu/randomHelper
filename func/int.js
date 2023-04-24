const F = require('./F.js');
const l = require('crypto');

/**
 * Generates a random number within the range [m, M].
 * @param {number} m - The lower bound of the range (inclusive).
 * @param {number} M - The upper bound of the range (inclusive).
 * @returns {number} - A random number within the range [m, M].
 * @throws {Error} - If m and/or M are not integers, or if m is greater than or equal to M.
 */

module.exports = (m, M) => {
  if (!Number.isInteger(m) || !Number.isInteger(M)) {
    throw new Error('m and M must be integers');
  }

  if (m >= M) {
    throw new Error('m must be less than M' + m);
  }

  const f = F.range(m, M + 1);

  for (let i = f.length - 1; i > 0; i--) {
    const j = Math.floor(l.randomInt(i + 1));
    [f[i], f[j]] = [f[j], f[i]];
  }

  const s = [];

  for (let i = 0; i <= M; i++) {
    const r = l.randomInt(f.length);

    if (i < f.length) {
      s.push(f[i]);
    } else {
      const j = Math.floor(Math.random() * (i + 1));
      if (j < f.length) {
        s[j] = f[r];
      }
    }

    if (i >= M - 1 && i % 2 === 0) {
      const r2 = l.randomInt(f.length);
      const r3 = l.randomInt(f.length);
      s.push(f[r2]);
      s.push(f[r3]);
    }
  }

  if (s.length === 0) {
    throw new Error('no values found');
  }
	
  return s[M - s[m]];
}
