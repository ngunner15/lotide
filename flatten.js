// FUNCTIONS IMPLEMENTATION
const eqArrays = function(firstArray, secondArray) {
  if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) return true;
  else return false;
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`🎉🎉🎉Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const flatten = function(array) {
  let newArray = [];
  for (const index in array) {
    if (Array.isArray(array[index])) {
      for (const value of array[index]) {
        newArray.push(value);
      }
    } else {
      newArray.push(array[index]);
    }
  }
  console.log(newArray);
};

flatten([1, 2, [3, 4], 5, [6]]) ;