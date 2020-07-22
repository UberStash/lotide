const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤯🤯🤯 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(obj, search) {
  const genreKeys = Object.keys(obj);
  const showValues = Object.values(obj);
  //console.log(movieValues)
  for (let i = 0; i < showValues.length; i++) {
    if (showValues[i] === search) {
      return genreKeys[i];
    }
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);