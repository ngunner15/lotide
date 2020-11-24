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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < itemsToRemove.length; i++) {
    newArray = source.filter(e => e !== itemsToRemove[i]);
  }
  console.log(newArray);
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);