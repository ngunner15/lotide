const assertArraysEqual = require('./assertArraysEqual');

// ACTUAL FUNCTION
const middle = function(array) {
  const middleOne = Math.floor(array.length/2 - 1);
  const middleSecond = Math.floor(array.length/2);
  if(array.length < 3) return [];
  else if(array.length % 2 === 0) return [array[middleOne], array[middleSecond]];
  return [array[middleSecond]];
};

module.exports = middle;