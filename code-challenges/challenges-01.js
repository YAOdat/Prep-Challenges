"use strict";

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78

const findMax = (arr) => {
  let max;
  // write your code here
  for(let i=0; i<arr.length; i++){
    for(let p=i+1; p<arr.length; p++){
      if(i>k){
        max= arr[i];
      }
     else if(k>i){
      max= arr[k];
     }
    }
  }

  return max;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
const sumNums = (arr) => {
  let sum;
  // write your code here
  if (typeof arr[i] == "number")
  for (let i = 0; i < array.length; i++) {
    if (typeof arr[i] == "number"){

    sum += arr[i];
  }
 
} return sum;};
// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums };
