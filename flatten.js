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
  return newArray;
};

module.exports = flatten;