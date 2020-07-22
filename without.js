const assertArraysEqual = function(a, b) {
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

const without = function(a, b) {
  // create loop that iterates over a and then pushes into a new array if its not equal to be
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    
    if (a[i] === b[0]) {
      i++;
    } else {
      newArr.push(a[i]);
    }
      
  }
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
