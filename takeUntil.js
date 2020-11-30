const takeUntil = function(array, callback) {
  let expectedArray = [];
  for (const value of array) {
    if (callback(value)) return expectedArray;
    expectedArray.push(value);
  }
};

module.exports = takeUntil;