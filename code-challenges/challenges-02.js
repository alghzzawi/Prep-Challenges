"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the reversed array.
//  Without using built-in methods.
//  Input: ['C#', 'JS', 'Ruby','Python']
//  Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
  // write your code here
  const revArr = [];
  var j = 0;
  for (let index = arr.length-1; index >= 0; index--) {
    revArr[index] = arr[j];
    j++;
  }
  
  return revArr;
};

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

//  Challenge 2:
// Required:

//  Write a function that takes an array of numbers and increases its values by 10
//
//  Input: [20, 54, 89, 41]
//  Output: [30, 64, 99, 51]

const arrInc = (arr) => {
  const result = [];
  // write your code here
  for (let index = 0; index < arr.length; index++) {
    result[index] = arr[index] + 10;
  }
  return result;
};

// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, arrInc };
