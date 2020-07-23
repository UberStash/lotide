
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




const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    // console.log("in loop")
    if (callback(item)) {
    //  console.log('item true', item)
      break;
    } else {
      results.push(item);
    }
  
  }
  return results;
  
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArrayEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);




