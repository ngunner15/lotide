// FUNCTIONS IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) return true;
  else return false;
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["6", "2", "3"]), false);
assertEqual(eqArrays([], []), true);