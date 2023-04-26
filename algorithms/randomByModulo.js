module.exports = (m, M) => {
    if (!Number.isInteger(m) || !Number.isInteger(M) || m >= M) {
      throw new Error('Invalid arguments: m and M must be integers, with m < M');
    }
  
    const r = M - m;
    const v = Math.floor(Math.random() * (r + 1));
  
    return m + v;
}