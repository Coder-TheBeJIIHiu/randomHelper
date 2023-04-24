# RandomHelper

[![npm version](https://badge.fury.io/js/rand-helper.svg)](https://www.npmjs.com/package/rand-helper)
[![GitHub license](https://img.shields.io/github/license/Coder-TheBeJIIHiu/randomHelper)](https://github.com/Coder-TheBeJIIHiu/randomHelper/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Coder-TheBeJIIHiu/randomHelper)](https://github.com/Coder-TheBeJIIHiu/randomHelper/issues)
[![GitHub stars](https://img.shields.io/github/stars/Coder-TheBeJIIHiu/randomHelper)](https://github.com/Coder-TheBeJIIHiu/randomHelper/stargazers)

`rand-helper` is a JavaScript library designed to generate random values of different data types and manipulate numbers.

## Installation

To install the `rand-helper` module, run one of the following commands:

```
npm install rand-helper   // for stable version
```

```
npm install git+https://github.com/Coder-TheBeJIIHiu/randomHelper   // for the latest beta version
```
## Telegram chat

[CLICK](https://t.me/random_helper)

![GROUP](https://im.wampi.ru/2023/04/24/image0cb06d72ab8eb808.png)
## Usage

### Examples

```js
const { getRandomInt, getRandomString, getRandomElement, getRandomIntArray, getRandomHex, getRandomRGB, getRandomHSV, getRandomBoolean } = require('rand-helper');

// Generate a random integer between 0 and 10
const randomNumber = getRandomInt(0, 10); // 4

// Generate a random string of a given length
const randomString = getRandomString(12, {
  useCaps: true,
  useInt: true,
  useSpecialSymbols: false,
  useRussianLetters: false,
  useRussianLettersCaps: false
}); // GBRnGa9QOp4

// Generate a random element from an array
const arr = ['apple', 'banana', 'orange'];
const randomElement = getRandomElement(arr); // apple

const randomIntArray = getRandomIntArray(1, 10, 5); // [ 8, 5, 9, 3, 7 ]

const randomHex = getRandomHex({
  includeHash: true
}); // #cf5eb8

const randomRGB = getRandomRGB({
  includeAlpha: true,
  useArray: false
}); // rgba(224, 50, 129, 0.24)

const randomHSV = getRandomHSV({
  includeAlpha: true,
  useArray: false
}); // hsva(343, 0.49, 0.33, 0.55)

const randomBoolean = getRandomBoolean(); // false
```

### F module

```js
const { F } = require('rand-helper');

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myData = [
  { name: 'Alice', age: '32' },
  { name: 'Bob', age: '24' },
  { name: 'Charlie', age: '45' },
  { name: 'Dave', age: '19' },
  { name: 'Eve', age: '5' },
  { name: 'Frank', age: '100' }
];

const myRange = F.range(1, 10); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const myChunks = F.chunk(myArray, 3); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// Sort data by name (in alphabetical order)
const dataSortedByName = F.soryBy(data, { sortby: 'name' });
  
// Output: [
//   { name: 'Alice', age: '32' },
//   { name: 'Bob', age: '24' },
//   { name: 'Charlie', age: '45' },
//   { name: 'Dave', age: '19' },
//   { name: 'Eve', age: '5' },
//   { name: 'Frank', age: '100' }
// ]
  
// Sort data by age (in ascending order)
const dataSortedByAge = F.soryBy(data, { sortby: 'age', numeric: true });

// Output: [
//   { name: 'Eve', age: '5' },
//   { name: 'Dave', age: '19' },
//   { name: 'Bob', age: '24' },
//   { name: 'Alice', age: '32' },
//   { name: 'Charlie', age: '45' },
//   { name: 'Frank', age: '100' }
// ]
  
// Sort data by age (in descending order)
const dataSortedByAgeDesc = F.soryBy(data, { sortby: 'age', numeric: true, reverse: true });

// Output: [
//   { name: 'Frank', age: '100' },
//   { name: 'Charlie', age: '45' },
//   { name: 'Alice', age: '32' },
//   { name: 'Bob', age: '24' },
//   { name: 'Dave', age: '19' },
//   { name: 'Eve', age: '5' }
// ]
```

### F.debounced example

```js
const { F } = require('rand-helper')

// Example 1: Debouncing a function that writes to a file
const fs = require('fs');

const writeFileDebounced = F.debounced(fs.writeFile, 500);

// Write to a file multiple times in quick succession
writeFileDebounced('file.txt', 'Hello world 1', () => {}); // Writes data after 500ms
writeFileDebounced('file.txt', 'Hello world 2', () => {}); // Cancels previous write, writes new data after 500ms
writeFileDebounced('file.txt', 'Hello world 3', () => {}); // Cancels previous write, writes new data after 500ms

// Example 2: Debouncing a function that calculates a sum
const sum = (a, b) => {
  console.log(`Calculating sum of ${a} and ${b}...`);
  return a + b;
};

const debouncedSum = F.debounced(sum, 1000);

// Calculate the sum multiple times in quick succession
console.log(debouncedSum(2, 3)); // Returns undefined
console.log(debouncedSum(4, 5)); // Returns undefined
console.log(debouncedSum(6, 7)); // Cancels previous calculation, returns 13 after 1000ms
```