const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (firstArray, secondArray) {
  if (JSON.stringify(firstArray) === JSON.stringify(secondArray)) return true;
  else return false;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (JSON.stringify(object1) === JSON.stringify(object2)) {
    return true;
  } else {
    return false;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd1 = { c: "1", d: ["2", 3] };

const cd2 = { c: "1", d: ["2", 3, 4] };


assertEqual(eqObjects(cd, dc), false)
assertEqual(eqObjects(cd, cd2), false);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

//console.log(eqObjects(cd, dc));
//console.log(eqObjects(cd, cd1));