const findKeyByValue = function(theObject, theValue) {
  for (const key in theObject) {
    if (theObject[key] === theValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;