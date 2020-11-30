const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns Bootcamp for Bootcamp", () => {
    assert.strictEqual(assertEqual("Bootcamp", "Bootcamp"));
  });

  it("returns 2 for 2", () => {
    assert.strictEqual(assertEqual(2, 2));
  });
});