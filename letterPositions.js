
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


const letterPositions = function(sentence) {
  
  const results = {};
  // console.log(string);
  for (let i = 0; i < sentence.length; i++) {
    //console.log(i)
   
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
      //console.log('hit if');
    } else if (sentence[i] === ' ') {
      continue;
    } else {
      results[sentence[i]] = [i];
      //console.log('hit else');
    }
  }
    
  
  
  
  return results;
};

assertArrayEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("lighthouse in the house"));