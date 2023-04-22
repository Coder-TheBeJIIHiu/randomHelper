const I = require("./int.js");

/**
 * Generates a random string of specified length with specified options
 * @param {number} l - The length of the string to generate
 * @param {Object} o - The options to use for generating the string
 * @param {boolean} [o.useCaps=true] - Whether or not to include capital letters
 * @param {boolean} [o.useInt=true] - Whether or not to include numbers
 * @param {boolean} [o.useSpecialSymbols=false] - Whether or not to include special symbols
 * @param {boolean} [o.useRussianLetters=false] - Whether or not to include Russian letters
 * @param {boolean} [o.useRussianLettersCaps=false] - Whether or not to include capital Russian letters
 * @returns {string} - The randomly generated string
 */

module.exports = (l, o = {}) => {
  const {
    useCaps = true,
    useInt = true,
    useSpecialSymbols = false,
    useRussianLetters = false,
    useRussianLettersCaps = false
  } = o;

  let c = [
		"abcdefghijklmnopqrstuvwxyz",
    useCaps && "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    useInt && "0123456789",
    useSpecialSymbols && "!#$%&()*+,-./:;<=>?@[\\]^_`{|}~",
    useRussianLetters && "абвгдеёжзийклмнопрстуфхцчшщъыьэюя",
    useRussianLettersCaps && "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
  ];
	
  c = c.filter(val => val !== false).join("");

  let R = "";
  for (let i = 0; i < l; i++) {
    const r = I(0, c.length);
    R += c[r];
    R = R.replace('undefined', '');
  }
  return R;
};
