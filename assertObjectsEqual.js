

const assertObjectsEqual = function(object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  const inspect = require('util').inspect;
  // console.log(obj1, obj2)
  if (obj1.length !== obj2.length) {
    console.log(`🤯🤯🤯 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  } else {
    
    for (const i of obj1) {
      if (object1[i] === object2[i]) {
        console.log(`👍👍👍 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
      } else {
        console.log(`🤯🤯🤯 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
      }
    }

  }
};




const cd = { c: "1", d: {q: ["2", 3]} };
const dc = { d: {q: ["2", 3]}, c: "1" };
assertObjectsEqual(cd, dc);

