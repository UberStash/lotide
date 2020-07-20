const words = ["Yo Yo", "Lighthouse", "Labs", "Labs"];

const tail = function() {
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      newArr.push(words[i]);
    }
  }
  console.log(newArr);
  
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤯🤯🤯 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  }
};

tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);