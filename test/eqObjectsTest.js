const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd1 = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

describe("#eqObjects", () => {
  it("returns false for cd and dc objects not being equal", () => {
    assert.strictEqual(eqObjects(cd, dc), false);
  });

  it("returns false for cd and cd2 objects not being equal", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

  it("returns true for cd and cd1 objects being equal", () => {
    assert.strictEqual(eqObjects(cd, cd1), true);
  });
});