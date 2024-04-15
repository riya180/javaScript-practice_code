let name = {
  firstname: 'riya',
  lastname: 'thakur',
};

let printName = function () {
  console.log(this.firstname + ' ' + this.lastname);
};
let printMyName = printName.bind(name);
printMyName();
Function.prototype.mybind = function (...args) {
  let obj = this;
  return function () {
    obj.call(args[0]);
  };
};
let printMyName2 = printName.mybind(name);
printMyName2();
