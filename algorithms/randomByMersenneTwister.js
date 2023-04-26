module.exports = (x, y) => {
    const a1 = 0xffffffff ^ ((1 << (32 - y)) - 1);
    const b1 = (1 << x.toString(2).length) - 1;
    const c1 = 0b01101100010100010001100111110110;
    const d1 = 1812433253;
    const e1 = 624;
    const f1 = 397;
    const g1 = 7;
    const h2 = 15;
    const i2 = 11;
    const j2 = 18;
    const k1 = new Array(e1);
    let l1 = e1;

    if (!Number.isInteger(x) || !Number.isInteger(y) || x >= y) {
      throw new Error('Invalid arguments: x and y must be integers, with x < y');
    }

    const m1 = (seed) => {
      k1[0] = seed >>> 0;
      for (let n1 = 1; n1 < e1; n1++) {
        const o1 = k1[n1 - 1] ^ (k1[n1 - 1] >>> 30);
        k1[n1] = (((o1 >>> 16) * d1) << 16) + (o1 & 0xffff) * d1 + n1;
        k1[n1] >>>= 0;
      }
    };
  
    const p1 = () => {
      for (let n1 = 0; n1 < e1; n1++) {
        const q1 = (k1[n1] & a1) | (k1[(n1 + 1) % e1] & b1);
        k1[n1] = k1[(n1 + f1) % e1] ^ (q1 >>> 1);
        if ((q1 & 1) !== 0) {
          k1[n1] ^= c1;
        }
      }
    };
  
    const r1 = () => {
      if (l1 >= e1) {
        p1();
        l1 = 0;
      }
  
      let q1 = k1[l1];
      q1 ^= q1 >>> i2;
      q1 ^= (q1 << g1) & 0x9d2c5680;
      q1 ^= (q1 << h2) & 0xefc60000;
      q1 ^= q1 >>> j2;
  
      l1++;
  
      return q1 >>> 0;
    };
  
    m1(Date.now() * 1000);
  
    const s1 = r1();
    return Math.floor(s1 / (0xffffffff / (y - x + 1))) + x;
  }
