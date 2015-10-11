"use strict";

var
range = require("../lib/range"),
cmp = require("cmp"),
assert = require("assert");

describe("range", function() {
  describe("range", function() {
    it("should behave like Python range()", function() {
      assert(cmp.eq(range.range(0, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), "Simple range");
      assert(cmp.eq(range.range(0, 10, 2), [0, 2, 4, 6, 8]), "Range with step");
      assert(cmp.eq(range.range(0, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), "range property test");
      assert(cmp.eq(range.range(10, 0, -1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), "negative step");

      assert(cmp.eq(range.range(5), [0, 1, 2, 3, 4]), 'When called with one argument, that argument is assumed to be the end of the range, and the beginning will be zero.');

      assert(cmp.eq(range.range(0, 3, 2), [0, 2]), "regression: if step is not divisible by abs(start - stop) we get an infinite loop");

      assert(cmp.eq(range.range(3, 0, -2), [3, 1]), "regression: if step is not divisible by abs(start - stop) we get an infinite loop (negative step now)");
    });
  });
  it("Should export the range() function, and also range.range() as a property", function() {
    assert.strictEqual(range, range.range);
  })
});
