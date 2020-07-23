const words = ["ground", "control", "to", "major", "tom"];

const assertArrayEqual = function(a, b) {
  if (typeof a !== typeof b || eqArrays(a, b) === false) {
    console.log(`🤯🤯🤯 Assertion Failed: ${a} !== ${b}`);
  } else if (typeof a === typeof b && eqArrays(a, b) === true) {
    console.log(`👍👍👍 Assertion Passed: ${a} === ${b}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
  if (arrOne.toString() === arrTwo.toString()) {
    return true;
  } else {
    return false;
  }
};


const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArrayEqual(map(words, word => word[0]), ['g','c','t','m','t']);
