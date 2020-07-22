



const letterPositions = function(sentence) {
  
  const results = {};
  // console.log(string);
  for (let i = 0; i < sentence.length; i++) {
    //console.log(i)
   
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
      console.log('hit if');
    } else if (sentence[i] === ' ') {
      continue;
    } else {
      results[sentence[i]] = [i];
      console.log('hit else');
    }
  }
    
  
  
  
  return results;
};

console.log(letterPositions("lighthouse in the house"));