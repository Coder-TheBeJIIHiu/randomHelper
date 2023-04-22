# RandomHelper

[![npm version](https://badge.fury.io/js/randomhelper.svg)](https://www.npmjs.com/package/randomhelper)
[![GitHub license](https://img.shields.io/github/license/Coder-TheBeJIIHiu/randomHelper)](https://github.com/Coder-TheBeJIIHiu/randomHelper/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Coder-TheBeJIIHiu/randomHelper)](https://github.com/Coder-TheBeJIIHiu/randomHelper/issues)
[![GitHub stars](https://img.shields.io/github/stars/Coder-TheBeJIIHiu/randomHelper)](https://github.com/Coder-TheBeJIIHiu/randomHelper/stargazers)

The module `randomhelper` is a JavaScript library designed to generate random values of different data types and manipulate numbers.

## Installation

To install the `randomhelper` module, run the following command:

```
npm install randomhelper
```

## Usage

Examples of module usage:

```js
const { getRandomInt, getRandomString, getRandomElement, getRandomIntArray, getRandomHex, getRandomRGB, getRandomHSV, getRandomBoolean } = require('randomhelper');

// Generation of a random integer between 0 and 10
const randomNumber = getRandomInt(0, 10); // 4

// Generation of a random string of a given length
const randomString = getRandomString(12, { // It is not necessary to transfer options
  useCaps: true,
  useInt: true,
  useSpecialSymbols: false,
  useRussianLetters: false,
  useRussianLettersCaps: false
}); // GBRnGa9QOp4

// Generating a random element from an array
const arr = ['apple', 'banana', 'orange'];
const randomElement = getRandomElement(arr); // apple

const randomIntArray = getRandomIntArray(1, 10, 5); // [ 8, 5, 9, 3, 7 ]

const randomHex = getRandomHex({ // It is not necessary to transfer options
  includeHash: true
}) // #cf5eb8

const randomRGB = getRandomRGB({ // It is not necessary to transfer options
  includeAlpha: true,
  useArray: false
}) // rgba(224, 50, 129, 0.24)

const randomHSV = getRandomHSV({ // It is not necessary to transfer options
  includeAlpha: true,
  useArray: false
}) // hsva(343, 0.49, 0.33, 0.55)

const randomBoolean = getRandomBoolean() // false
```
