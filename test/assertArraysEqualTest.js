
const assertArraysEqual = require('../assertArraysEqual');



assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 3], [1, 2, 3], false);
assertArraysEqual([], [1, 2, 3], false);
assertArraysEqual([], [], true);
assertArraysEqual(["1, 2, 3"], [1, 2, 3], false);