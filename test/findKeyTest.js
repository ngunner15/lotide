const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey", () => {
  it("returns noma === noma", () => {
    assert.strictEqual(example1, "noma");
  });

  it("returns Akaleri === Akaleri", () => {
    assert.strictEqual(example2, "Akaleri");
  });

  it("returns undefined === undefined", () => {
    assert.strictEqual(example3, undefined);
  });
});

const example1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)  // => "noma"

const example2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3)

const example3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4)