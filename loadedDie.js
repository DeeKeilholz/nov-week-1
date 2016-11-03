// Create a function called loadedDie() that when called, seems to generate
// random numbers between 1 and 6, but actually just pulls them in a row from a
// hardcoded list.


var loadedDie = (function () {
  var list = [5, 4, 6, 1];
  var i = -1;
  return function() {
    i += 1;
    return list[i];
  }
})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6
console.log(loadedDie());  // 1
