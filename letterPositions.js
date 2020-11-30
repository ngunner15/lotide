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

module.exports = letterPositions;