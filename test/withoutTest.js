const without = require('../without');
const assert = require('chai').assert;

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

describe("#without", () => {
  it("returns hello, world === hello, world", () => {
    assert.deepEqual(without(words, ["lighthouse"]), [ 'hello', 'world' ]);
  });

  it("returns hello,world,lighthouse === hello,world,lighthouse", () => {
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});