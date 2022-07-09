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
  let pointer= arr[0]
  for(let i=0; i<arr.length; i++){
    for(let p=i+1; p<arr.length+1; p++){
      if(arr[i]>pointer){
        pointer= arr[i];
      }
    
  }
}
  return pointer;
};


arr = [12, 32, 22, 45, 78, 12, 50];
console.log(findMax(arr))





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
  let sum=0;
  // write your code here
  
      for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] == "number")
         {
          sum += arr[i];
        }
  }

 
return sum;
};

arr=[20, '234', 'car', 41, 20, 'chair']
console.log(sumNums(arr))

// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums };
