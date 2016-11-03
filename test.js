// var companies = [
//   {
//     name: "Telus",
//     province: "BC",
//     sales: [ 100, 200, 400 ]
//   },
//   {
//     name: "Bombardier",
//     province: "AB",
//     sales: [ 80, 20, 10, 100, 90, 500 ]
//   },
//   {
//     name: "Telus",
//     province: "BC",
//     sales: [ 500, 100 ]
//   }
// ];
//
//
//   // fetches provinces that are BC
// function fetchProvince(array) {
//   var output = [];
//    for(var i = 0; i < array.length; i++) {
//    if (array[i].province === "BC") {
//      output += array[i]
//    }
//   }
//   return output;
// }
//
// console.log(fetchProvince(companies));

function stdev (arr) {
  var avg = average(arr);

  var squareDiffs = arr.map(function(value){
    var diff = value - avg;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });

  var avgSquareDiff = average(squareDiffs);

  var stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
}

function average(data){
  var sum = data.reduce(function(sum, value){
    return sum + value;
  }, 0);

  var avg = sum / data.length;
  return avg;
};



// function round(number) {
//   return Math.round(number * 100) / 100;
// }



console.log(stdev([6,2,3,4,9,6,1,0,5]));
