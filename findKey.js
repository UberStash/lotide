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


const findKey = function(obj, callback) {
  //console.log(array, callback)
  const arr = [];
  for (const o in obj) {
    
    if (callback(obj[o])) {
      
      arr.push(o);
      return arr;
    }
  }
};


assertArrayEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), ["noma"]);