const assertEqual = function(actual, expected) {
  if (actual.toString() !== expected.toString()) {
    console.log(`🤯🤯🤯 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};
  // console.log(string);
  for (const i of string) {
    //console.log(i)
   
    if (results[i]) {
      results[i] += 1;
    } else if (i === ' ') {
      continue;
    } else {
      results[i] = 1;
    }
  }
    
  
  
  console.log(results);
  return results;
};



assertEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1});