const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(inputString) {
  const results = {};
  for (const key in inputString) {
    if (inputString[key] !== " ") {
      if (results[inputString[key]]) {
        results[inputString[key]].push(Number(key));
      } else {
        results[inputString[key]] = [Number(key)];
      }
    }
  }
  //console.log(results);
  return results;
};

const exampleOne = letterPositions("lighthouse in the house");
//console.log(exampleOne);
// TEST CASE
assertArraysEqual(exampleOne["i"], [1, 11]);
assertArraysEqual(exampleOne["o"], [6, 19]);
assertArraysEqual(exampleOne["z"], undefined);