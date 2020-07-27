const assertEqual = require('../assertEqual');
const head = require('../head');

// head test code
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");