module.exports = (a, s) => {
    const r = [];
    for (let i = 0; i < a.length; i += s) {
      r.push(a.slice(i, i + s));
    }
    return r;
}
  