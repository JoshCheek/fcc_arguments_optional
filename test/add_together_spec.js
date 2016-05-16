var assert = require('chai').assert;
var addTogether = require('../src/add_together').addTogether;

describe('addTogether', function() {
  it('adds two arguments together', function() {
    assert.equal(5, addTogether(2, 3));
  });

  it('can take the arguments one at a time', function() {
    assert.equal(5, addTogether(2)(3));
  });

  it('returns undefined when the argument isn\'t a number', function() {
    assert.equal(undefined, addTogether("http://bit.ly/IqT6zt", 0));
    assert.equal(undefined, addTogether(2, "3"));
    assert.equal(undefined, addTogether("2", 3));
    assert.equal(undefined, addTogether(2)([3]));
    assert.equal(undefined, addTogether([2])(3));
  });
});
