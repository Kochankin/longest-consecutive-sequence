module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) {
    return 0;
  }

  var temp = []; 
  var max = 1; 

  for (var i = 0; i < array.length; i++) { 
      temp.push(array[i]);  
  }

  for (var i = 0; i < array.length; i++) { 
      var prev = array[i] - 1; 
      var next = array[i] + 1; 
      var counter = 1;

      while (temp.indexOf(prev) !== -1) { 
          counter++;  
          temp.splice(temp.indexOf(prev), 1); 
          prev--; 
      }

      while (temp.indexOf(next) !== -1) { 
          counter++; 
          temp.splice(temp.indexOf(next), 1);

          next++; 
      }

      max = Math.max(counter, max); 
  }

  return max;
}

