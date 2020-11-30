const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CASES
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle(["1", "2", "3"]), ["2"]);