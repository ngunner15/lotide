// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (JSON.stringify(object1) === JSON.stringify(object2)) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;