
module.exports = function(arrOne, arrTwo) {
 
  if (arrOne.toString() === arrTwo.toString() && arrOne.length === arrTwo.length && typeof arrOne === typeof arrTwo) {
    return true;
  } else {
    return false;
  }
  
};


// module.exports = {eqArrays};

