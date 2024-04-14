//pure function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

//impure function
let total = 0;
function addToTotal(value) {
  total += value;
  return total;
}
console.log(addToTotal(5));
//console.log(addToTotal(5));
//console.log(addToTotal(5));

//callback fuction
function add(x, y) {
  return x + y;
}
let a = 1,
  b = 3;
let result = add(a, b);
console.log(result);
console.log(add(9, 1));

// callback function used in real project
function display(x, y, opration) {
  var result = opration(x, y);
  console.log(result);
}
display(4, 3, add);
display(4, 3, divide);
