"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  optional:
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
// Input: ['C#', 'JS', 'Ruby','Python']
// Output: ['Python','Ruby','JS','C#']

let arr =  ['C#', 'JS', 'Ruby','Python'];
var reversedArr=[]

const reverseArray = (arr) => {
  // write your code here
  for(var i = arr.length-1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}
return reversedArr;
};


console.log(reverseArray(arr))


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Given the array consisting of 2n elements. Write a function that takes the
// array in the form [x1,x2,...,xn,y1,y2,...,yn] and return the array
// in in the form [x1,y1,x2,y2,...,xn,yn].
// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
let nums = [2,5,1,3,4,70];

const shuffleArray = (arr) => {
  let shuffledArray = [];
  let n=3;
  for (let i=0; i<n; i++){
    shuffledArray.push(arr[i], arr[i+n])
  }
  return shuffledArray;
};


console.log(shuffleArray(nums))

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position
// moves to indices[i] in the shuffled string.
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

const shuffleString= (str, indicesArr) => {
  // write your code here
  
let shString= "";
for (let i=0; i < str.length; i++) {
  shString+=str[indicesArr.indexOf(i)]
}
return shString
};

var result = shuffleString("codeleet", [4,5,6,7,0,2,1,3]);
console.log(result);
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, shuffleArray, shuffleString };