const assert = require('chai').assert;
const countLetters = require('../countLetters');

const exampleOne = countLetters("lighthouse in the house");

describe("#countLetters", () => {
  it("returns undefined for z in 'lighthouse in the house'", () => {
    assert.strictEqual(exampleOne["z"], undefined);
  });

  it("returns 2 for i in 'lighthouse in the house'", () => {
    assert.strictEqual(exampleOne["i"], 2); 
  });
});