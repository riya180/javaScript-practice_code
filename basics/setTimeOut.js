console.log('start');
function cb() {
  console.log('callback');
}

setTimeout(cb, 5000);
console.log('End');

function xyz() {
  let a = 3;
  let b = 4;
  result = a + b;
}

xyz();
console.log(result);
