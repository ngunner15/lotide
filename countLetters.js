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

module.exports = countLetters;