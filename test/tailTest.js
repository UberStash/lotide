const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
const resultTwo = tail(["Labs"]);
const resultThree = tail([]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(resultTwo.length, 0); // ensure we get back two elements
assertEqual(resultThree.length, 0); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
