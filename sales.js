var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [{
  name: "Telus",
  province: "BC",
  sales: [ 100, 200, 400 ]
},
{
  name: "Bombardier",
  province: "AB",
  sales: [ 80, 20, 10, 100, 90, 500 ]
},
{
  name: "Telus",
  province: "SK",
  sales: [ 500, 100 ]
}];

// TODO: checkout the `.inject` method and use it for doing the sum

var sumArray = function(arr){
  var sum = 0;
  arr.forEach(function(n){
    sum += n;
  });
  return sum;
}


var salesTaxReport = function(salesData, taxRates) {
  // create an empty object to store results
  var results = {};
  // for each sales entry object
  salesData.forEach(function(current){
    // sum the current sales
    var salesSum = sumArray(current.sales);
    // multiple the taxRate of the current province by the current total sales
    var taxes = salesSum * salesTaxRates[current.province];
    // if the company has been encountered
    if(results.hasOwnProperty(current.name)){
      // increment totals
      results[current.name].totalSales += salesSum;
      results[current.name].totalTaxes += taxes;
    }else{
      // set the totals for the first time (create a new for that company)
      results[current.name] = {
        totalSales: salesSum,
        totalTaxes: taxes
      };
    }
  });
  return results;
}

var results = salesTaxReport(companySalesData, salesTaxRates);


console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
