// math for Bombardier:
  // add all sales to get total of sales
  // all sales * salesTaxRate gives total tax

// math for Telus:

  // add all sale Telus SK
  // all sales Telus SK * salesTaxRates
  // add all sales Telus BC
  // all sales BC * salesTaxRates

    // add all sales BC + SK to get total sales
    // add all taxes BC + SK to get total taxes

// var salesTaxRates = {
//   AB: 0.05,
//   BC: 0.12,
//   SK: 0.10
// };
//
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  // {
  //   name: "Bombardier",
  //   province: "AB",
  //   sales: [ 80, 20, 10, 100, 90, 500 ]
  // },
  // {
  //   name: "Telus",
  //   province: "SK",
  //   sales: [ 500, 100 ]
  // }
];

// for (const prop in companySalesData) {
//   prop = the property name
//   companySalesDat[prop] = the property value
// }
//
// for (let i = 0; l = companySalesData.items.length; i < l; i++) {
//
//   var obj = companySalesData.items[i]
// }






function calculateSum(salesData) {
  salesData.forEach(function(company) {
    var totalSales = company.sales.reduce(previous, current) {
      return previous + current;
    }
  })
  return total;
}

console.log(calculateSum(companySalesData));

//
//
//
// var results = salesTaxReport(companySalesData, salesTaxRates);









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
