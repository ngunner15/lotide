const map = require('../map');
const assert = require('chai').assert;

const words = ["ground", "control", "to", "major", "tom"];
const results0 = map(words, word => word[0]);
const results1 = map(words, word => word[1]);

describe("#map", () => {
  it("returns g,c,t,m,t === g,c,t,m,t", () => {
    assert.deepEqual(results0, [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("returns 'r', 'o', 'o', 'a', 'o' === 'r', 'o', 'o', 'a', 'o' ", () => {
    assert.deepEqual(results1, [ 'r', 'o', 'o', 'a', 'o' ]);
  });
});