const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual((tail([1, 2, 3]).length), 2);
  });

  it("returns [] for ['1']", () => {
    assert.deepEqual(tail(['1']), []); 
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []); 
  });

  it("returns 'Lighthouse', 'Labs' for 'Hello', 'Lighthouse', 'Labs'", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
  });

});
