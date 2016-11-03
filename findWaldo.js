function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      //I'm passing var i (my counter) to found. Could be anything: arr[i] would return
      // Waldo, arr.length would return the length of the array. Index references whatever
      // I define as found ()
      found(i);   // execute callback
    }
  }
  // function has no return, but doesn't show "undefined" b/c of the console.log in my
  // callback function
}

function actionWhenFound(index) {
  console.log(index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
