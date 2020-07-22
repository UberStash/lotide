
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



const middle = function(arr) {
  const divide = arr.length / 2;
  const solution = [];
  // console.log(divide)

  /// odd
  if (divide % 1 !== 0 && divide > 1) {
    solution.push(arr[Math.ceil(divide - 1)]);
  } else if (divide % 2 === 0 && divide > 1) {
    solution.push(arr[divide - 1], arr[divide]);

  } else if (divide % 3 === 0 && divide > 1) {
    solution.push(arr[divide - 1], arr[divide]);
  }


  return solution;
};

assertArrayEqual(middle([1, 7, 8, 6, 6]), [8]);
assertArrayEqual(middle([1, 7,]), []);
assertArrayEqual(middle([1, 1, 7, 8, 6, 6]), [7, 8]);
