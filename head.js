let first;
const head = function(arr) {
  first = arr.shift();
  return first;
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤯🤯🤯 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  }
  
};


assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");