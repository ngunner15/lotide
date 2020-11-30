const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("returns 1 === 1", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns undefined === undefined", () => {
    assert.strictEqual(result1["Karima"], undefined); 
  });

  it("returns 2 === 2", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("returns undefined === undefined", () => {
    assert.strictEqual(result1["Agouhanna"], undefined); 
  });
});