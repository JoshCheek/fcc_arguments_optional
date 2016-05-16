module.exports = {addTogether: addTogether};

function addTogether(first, second) {
  if(arguments.length > 1) {
    if(typeof first !== 'number' || typeof second !== 'number') {
      return undefined;
    }
    return first + second;
  }

  return function(second) {
    return addTogether(first, second);
  }
}
