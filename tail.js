const tail = function(words) {
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      newArr.push(words[i]);
    }
  }
 
  return newArr;
  
};

module.exports = tail;

