const I = require("./int.js");

/**
 * Generates a random color in HEX format.
 * @param {Object} [o] - Options.
 * @param {boolean} [o.includeHash=true] - Whether to include a '#' symbol at the beginning of the string.
 * @returns {string} A random color in HEX format.
 */

module.exports.getRandomHex = (o = {}) => {
    const {
        includeHash = true
    } = o;
    const color = I(0, 16777215).toString(16);
    return includeHash ? '#' + color : color;
}

/**
 * Generates a random color in RGB or RGBA format.
 * @param {Object} [o] - Options.
 * @param {boolean} [o.includeAlpha=true] - Whether to include an alpha value (opacity) in the output.
 * @param {boolean} [o.useArray=false] - Whether to return an array of values instead of a string.
 * @returns {(string|number[])} A random color in RGB or RGBA format.
 */

module.exports.getRandomRGB = (o = {}) => {
    const {
        includeAlpha = true,
        useArray = false
    } = o;
    const r = I(0, 255);
    const g = I(0, 255);
    const b = I(0, 255);
    const a = includeAlpha ? `, ${Math.random().toFixed(2)})` : ')';
    return useArray
      ? [r, g, b].concat(includeAlpha ? [Number(a.slice(2, -1))] : [])
      : `rgb${includeAlpha ? 'a' : ''}(${r}, ${g}, ${b}${a}`;
}

/**
 * Generates a random color in HSV or HSVA format.
 * @param {Object} [o] - Options.
 * @param {boolean} [o.includeAlpha=true] - Whether to include an alpha value (opacity) in the output.
 * @param {boolean} [o.useArray=false] - Whether to return an array of values instead of a string.
 * @returns {(string|number[])} A random color in HSV or HSVA format.
 */

module.exports.getRandomHSV = (o = {}) => {
    const {
      includeAlpha = true,
      useArray = false
    } = o;
    const h = I(0, 360);
    const s = Math.random().toFixed(2);
    const v = Math.random().toFixed(2);
    const a = includeAlpha ? `, ${Math.random().toFixed(2)})` : ')';
    return useArray
      ? [h, s, v].concat(includeAlpha ? [Number(a.slice(2, -1))] : [])
      : `hsv${includeAlpha ? 'a' : ''}(${h}, ${s}, ${v}${a}`;
};