
// The result should be an array of numbers corresponding to the x-y pairs provided
// in the input array (ie: calculate z given x and y):
  // x squared + y squared = sqare root of z

// (x * x) + (y * y) = Math.sqrt(z)


var input = [
  { x: 3, y: 4 }, // input[0]
  { x: 12, y: 5 }, // input [1]
  { x: 8, y: 15 } // input [2] 289 (square root is 17)
];


		function add_num(value) {
      var total_numSquared = 0;
			total_numSquared += (value.x * value.x) + (value.y * value.y);
      return Math.sqrt((total_numSquared));
		}

 var new_array = input.map(add_num);

 console.log(new_array);

// var newArray = input.map(function (obj) {
//
// console.log(newArray);
//


Math.sqrt()


// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);
