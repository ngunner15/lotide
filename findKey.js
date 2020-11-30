// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(inputObject, callback) {
  for (const key in inputObject) {
    if (callback(inputObject[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;