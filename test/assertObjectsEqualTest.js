const assertObjectsEqual = require('../assertObjectsEqual');
const assert = require('chai').assert;

describe("#assertObjectsEqualTest", () => {
  it("returns "+{ c: "1", d: ["2", 3] }+" for "+{ d: ["2", 3], c: "1" }+"", () => {
    assert.strictEqual(assertObjectsEqual(cd, dc));
  });

  it("returns "+{ c: "1", d: ["2", 3] }+" for "+{ c: "1", d: ["2", 3] }+"", () => {
    assert.strictEqual(assertObjectsEqual(cd, cd1));
  });
});

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd1 = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };