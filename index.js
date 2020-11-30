const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly
};