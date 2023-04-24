module.exports = (arr, o = {}) => {
    if (!Array.isArray(arr)) {
      throw new TypeError('Expected an array as the first argument');
    }
  
    if (o !== null && typeof o !== 'object') {
      throw new TypeError('Expected an object as the second argument');
    }
  
    const { sortby, reverse = false, numeric = false } = o;
  
    if (sortby !== undefined && typeof sortby !== 'string') {
      throw new TypeError('Expected `sortby` to be a string');
    }
  
    if (typeof reverse !== 'boolean') {
      throw new TypeError('Expected `reverse` to be a boolean');
    }
  
    if (typeof numeric !== 'boolean') {
      throw new TypeError('Expected `numeric` to be a boolean');
    }
  
    const compareFn = (a, b) => {
      let x = a[sortby];
      let y = b[sortby];
  
      if (numeric) {
        x = Number(x);
        y = Number(y);
      }
  
      if (x < y) return reverse ? 1 : -1;
      if (x > y) return reverse ? -1 : 1;
      return 0;
    };
  
    return arr.sort(compareFn);
  };