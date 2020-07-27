const assertEqual = require('./assertEqual');

const head = function(arr, expected) {
  let first;
  first = arr.shift();
  assertEqual(first, expected)
};



module.exports = head;