const assert = require('chai').assert;
const middle = require('../middle') 



// assertArraysEqual(middle([1, 7, 8, 6, 6], [8]), [8], true);
// assertArraysEqual(middle([1, 8, 6, 6], [8]), [8, 6], false);
// assertArraysEqual(middle([], []), [], true);




describe("#middle", () => {
  it("returns 8 for [1, 7, 8, 6, 6]", () => {
    assert.deepEqual(middle([1, 7, 8, 6, 6]), [8]);
  });

  it("returns [] for ['1']", () => {
    assert.deepEqual(middle(['1']), []); 
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []); 
  });

  it("returns 'Lighthouse' for 'Hello', 'Lighthouse', 'Labs'", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]); 
  });

  it("return 8, 6 for [1, 8, 6, 6]", () => {
    assert.deepEqual(middle([1, 8, 6, 6]) [8, 6]); 
  });

});