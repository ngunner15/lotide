const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < itemsToRemove.length; i++) {
    newArray = source.filter(e => e !== itemsToRemove[i]);
  }
  return newArray;
};

module.exports = without;