const l = require('crypto');
const F = require('./F.js');
const H = require('../algorithms/randomByModulo.js')
const T = require('../algorithms/randomByTime.js');
const N = require('../algorithms/randomByMersenneTwister.js');

/**
 * Generates a random selection of integers within a given range, with a preference for values within a randomly shuffled subset of the range.
 * @param {number} m - The lower bound of the range.
 * @param {number} M - The upper bound of the range.
 * @returns {number} - A randomly selected integer within the range.
 * @throws {Error} - Throws an error if m or M are not integers, or if m >= M.
 */
module.exports = (m, M) => {
  const G = []

  if (!Number.isInteger(m) || !Number.isInteger(M) || m >= M) {
    throw new Error('Invalid arguments: m and M must be integers, with m < M');
  }

  const f = F.range(m, M);

  for (let i = f.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [f[i], f[j]] = [f[j], f[i]];
  }

  const s = Array.from({ length: M - m + 1 }, (_, i) => (i < f.length ? f[i] : f[randomByModulo(m, M)]));

  if (M % 2 === 0) {
    const [r1, r2] = Array.from({ length: 2 }, () => f[Math.floor(Math.random() * f.length)]);
    s.push(r1, r2);
  }

  if (s.length === 0) {
    throw new Error('No values found');
  }

  const I = l.randomInt(0, 5);
  G.push(s[H(0, s.length - 1)]);
  G.push(s[Math.floor(Math.random() * s.length)])
  G.push(s[T(0, s.length - 1)])
  G.push(s[l.randomInt(0, s.length - 1)])
  G.push(s[N(0, s.length - 1)])
  switch (I) {
    case 0:
      return G[H(0, G.length - 1)];
    case 1:
      return G[Math.floor(Math.random() * G.length)];
    case 2:
      return G[T(0, G.length - 1)];
    case 3:
      return G[N(0, G.length - 1)]
    case 4:
      return G[l.randomInt(0, G.length - 1)];
  }
};