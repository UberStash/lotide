const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🤯🤯🤯 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);

  // console.log(obj1, obj2)
  if (obj1.length !== obj2.length) {
    return false;
  } else {
    
    for (const i of obj1) {
      if (object1[i] === object2[i]) {
        return true;
      } else {
        return false;
      }
    }

  }
};

const cd = { c: "1", d: {q: ["2", 3]} };
const dc = { d: {q: ["2", 3]}, c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);