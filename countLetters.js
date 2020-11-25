const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputString) {
  let result = {};
  for (const letter of inputString) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  //console.log(result); check the result object after for loop
  return result;
};

const exampleOne = countLetters("lighthouse in the house");

// TEST CASE
assertEqual(exampleOne["z"], undefined);
assertEqual(exampleOne["i"], 2);