
const eqArrays = require('./eqArrays')

const assertArraysEqual = function(a, b, expected) {
  if (eqArrays(a, b) !== expected) {
    console.log(`🤯🤯🤯 Assertion Failed: ${eqArrays(a, b)} !== ${expected}`);
  } else if (eqArrays(a, b) === expected) {
    console.log(`👍👍👍 Assertion Passed: ${eqArrays(a, b)} === ${expected}`);
  }
};


module.exports = assertArraysEqual;