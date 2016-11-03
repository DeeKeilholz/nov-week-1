// Implement your own version of the built-in array map function:
//
  // Yours will take in two arguments:
    //- The first will be an array to map
    //- he second will be a callback function.
    //The function will return a new array based on the results of the callback function.


function map (data, _cb) {
  var output = [];
  for (var i = 0; i < data.length; i++) {
    var elm = data[i];
      output.push(_cb(elm));
  }
  return output;
}

var array = ["ground", "control", "to", "major", "tom"];


var elmLength = map(array, function(string) {
  return string.length;
});

console.log(elmLength)


 //





// console.log(result);
// result [6, 7, 2, 5, 3]
