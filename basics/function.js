let name = {
  firstname: 'Riya',
  lastname: 'thakur',
  printFulName: function () {
    console.log(this.firstname + ' ' + this.lastname);
  },
};
name.printFulName();

//Arrow Function
let myFunction = (a, b) => a * b;
console.log(myFunction(2, 4));

// Pure Function
function calculateGST(productPrice) {
  return productPrice * 5;
}
console.log(calculateGST(10));
