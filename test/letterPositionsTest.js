const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

const exampleOne = letterPositions("lighthouse in the house");

describe("#letterPositions", () => {
  it("returns 1,11 === 1,11", () => {
    assert.deepEqual(exampleOne["i"], [1, 11]);
  });

  it("returns 6,19 === 6,19", () => {
    assert.deepEqual(exampleOne["o"], [6, 19]); 
  });

  it("returns undefined === undefined", () => {
    assert.deepEqual(exampleOne["z"], undefined);
  });
});