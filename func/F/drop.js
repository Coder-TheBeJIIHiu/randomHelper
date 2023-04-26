module.exports = (a) => {
    const t = a.reduce((s, c) => s + c.dropChance, 0);
    const r = Math.random() * t;
    let c = 0;
    for (let i = 0; i < a.length; i++) {
      const o = a[i];
      if (c <= r && r < c + o.dropChance) {
        return i;
      }
      c += o.dropChance;
    }
    return -1;
}  