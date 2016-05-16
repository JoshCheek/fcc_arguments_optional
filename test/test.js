var assert = require('chai').assert;

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, ['a', 'b', 'c'].indexOf('e'));
      assert.equal(-1, ['a', 'b', 'c'].indexOf('x'));
    });
  });

  describe('equality', function() {
    it('is not equal to an array with the same values', function() {
      assert.notEqual(['a','b','c'], ['a','b','c']);
    });

    it('can be compared in chai with deepEqual', function() {
      assert.deepEqual(   ['a','b','c'], ['a','b','c']);
      assert.notDeepEqual(['a','b','x'], ['a','b','c']);
    });
  });
});
