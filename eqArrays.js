//const assertEqual = require('../assertEqual');

const eqArrays = function(arrOne, arrTwo) {
 
  if (arrOne.toString() == arrTwo.toString()) {
    return true;
  } else {
    return false;
  }
  
};


module.exports = eqArrays;

