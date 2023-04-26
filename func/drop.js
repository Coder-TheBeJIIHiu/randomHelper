const I = require('./int.js')

/**
 * Returns the index of the element from the input array that should be chosen randomly based on its drop chance.
 * @param {Object[]} a - The array of objects from which an element should be chosen randomly.
 * @param {number} a[].dropChance - The drop chance of the corresponding element in the array.
 * @returns {number} - The index of the randomly chosen element, or -1 if the input array is empty.
 */ 
module.exports = (a) => {
    const t = a.reduce((s, c) => s + c.dropChance, 0);
    const r = I(0, t)
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