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
const letterPositions = require('./letterPositions');
const findKey = require('./findKey');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  assertArraysEqual,
  eqArrays,
  eqObjects,
  assertObjectsEqual,
  countLetters,
  countOnly,
  letterPositions,
  findKey,
  flatten,
  findKeyByValue,
  map,
  takeUntil,
  without
};