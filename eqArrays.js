const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤯🤯🤯 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function(arrOne, arrTwo) {
  
  if (arrOne.toString() === arrTwo.toString()) {
    return true;
  } else {
    return false;
  }
};



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
