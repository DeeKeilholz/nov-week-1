function findWaldo(arr, found) {
  arr.forEach(function(e, i, a) {
    if (a[i] === "Waldo") {
      found(i);
    }
  })
}

// array.forEach(myFunc)
// my func takes three arguments
// element
// index
// array

function actionWhenFound(index) {
  console.log(index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
