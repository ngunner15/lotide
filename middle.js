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

// ACTUAL FUNCTION
const middle = function(array) {
  const middleOne = Math.floor(array.length/2 - 1);
  const middleSecond = Math.floor(array.length/2);
  if(array.length < 3) return [];
  else if(array.length % 2 === 0) return [array[middleOne], array[middleSecond]];
  return [array[middleSecond]];
};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle(["1", "2", "3"]), ["2"]);