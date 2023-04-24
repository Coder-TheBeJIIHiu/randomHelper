module.exports = (f, t, o = {}) => {
    let i;
    let c;
    let r;

    const D = function(...args) {
      const x = o.context || this;

      const execute = function() {
        r = null;
        if (!o.immediate) {
          f.apply(x, args);
        }
      };
  
      const C = o.immediate && !r;
  
      clearTimeout(r);
      r = setTimeout(execute, t);
  
      if (C) {
        f.apply(x, args);
      }
    };

    D.cancel = function() {
      clearTimeout(r);
    };
  
    return D;
}