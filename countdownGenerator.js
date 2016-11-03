// Implement a function countdownGenerator() that takes in a number num and returns
// a function that counts down when it is called


var countdownGenerator = function (num) {
  var counter = num;
  var words = ["T-minus ","Blast Off!","Rockets already gone, bub!"]

  return function(){

     if (counter > 0){
      console.log(words[0]);
      }
     else if(counter === 0){
      console.log(words[1]);
      }
     else{
      console.log(words[2]);
    }
    counter = counter - 1;
  }
}





var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
