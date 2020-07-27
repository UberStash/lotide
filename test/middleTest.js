const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle') 



assertArraysEqual(middle([1, 7, 8, 6, 6], [8]), [8], true);
assertArraysEqual(middle([1, 8, 6, 6], [8]), [8], false);
assertArraysEqual(middle([], []), [], true);

