module.exports = (m, M) => {
    if (!Number.isInteger(m) || !Number.isInteger(M) || m >= M) {
      throw new Error('Invalid arguments: m and M must be integers, with m < M');
    }
  
    const r = M - m;
    const t = new Date().getTime().toString().split('').reverse().join('');
    const v = parseInt(t.charAt(0) + t.charAt(1) + t.charAt(2), 10) % r;
  
    return m + v;
  }