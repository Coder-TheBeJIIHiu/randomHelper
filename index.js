const getRandomInt = require("./func/int.js")
const getRandomIntArray = require("./func/array.js")
const getRandomString = require("./func/string.js")
const getRandomElement = require("./func/element.js")
const { getRandomHex, getRandomRGB, getRandomHSV } = require("./func/color.js")
const getRandomBoolean = require("./func/boolean.js")
const F = require("./func/F.js")
const dropChance = require('./func/drop.js')
module.exports = {
	getRandomInt,
	getRandomIntArray,
	getRandomString,
	getRandomElement,
	getRandomHex,
	getRandomRGB,
	getRandomHSV,
	getRandomBoolean,
	F,
	dropChance
}