module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) {
  return 0;
}

  if (array.length === 1) {
    return 1;
  }

  function compareNumbers(a, b) {
    return a - b;
  }
	
	Array.prototype.max = function() {
  return Math.max.apply(null, this);
	};

  var temp = [];
  var counter = 1;

  array.sort(compareNumbers);

  for (var i = 0; i < array.length; i++) { 
    var curr = array[i];

    if (curr === array[i-1]) {
      continue;
    } else if (curr === (array[i-1] + 1)) {
        counter++;
        temp.push(counter);
    } else {
      counter = 1;
      temp.push(counter);
    }
  }
	
  var result = Math.max.apply(null, temp);
  return result;
}
