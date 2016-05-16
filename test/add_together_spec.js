var assert = require('chai').assert;

function addTogether(first, second) {
  if(arguments.length > 1) {
    if(typeof first !== 'number' || typeof second !== 'number')
      return undefined;
  }

  if(arguments.length > 1) {
    return first + second;
  }

  // if(arguments.length === 1) {
  //   if(typeof first !== 'number')
  //     return undefined;
  // }

  return function(second) {
    if(typeof first === 'number') {
      if(typeof second !== 'number')
        return undefined;
      return first + second;
    }
    return undefined;
  }
}

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
