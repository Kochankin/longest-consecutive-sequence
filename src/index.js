module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) {
  return 0;
}

if (array.length === 1) {
  return 1;
}

var max = 0; 
var temp = new Set();

for (var i = 0; i < array.length; i++) { 
    temp.add(array[i]);  
}

for (var i = 0; i < array.length; i++) { 
    var prev = array[i] - 1; 
    if (!temp.has(prev)) {
      var curr = array[i];
      var counter = 1;
      
      while (temp.has(curr+1)) {
        curr++;
        counter++;
      }
			
      max = Math.max(counter, max); 
    }
}
return max;
}
