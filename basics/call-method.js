let name = {
  firstname: 'riya',
  midtname: 'kumari',
  lastname: 'thakur',
};

let printFulname = function (Hometown, state) {
  console.log(
    this.firstname +
      ' ' +
      this.midtname +
      ' ' +
      this.lastname +
      ' from ' +
      Hometown +
      ', ' +
      state
  );
};
printFulname.call(name, 'Muzaffarpur', 'Bihar');

let name2 = {
  firstname: 'pallu',
  lastname: 'mishra',
};

printFulname.call(name2, 'New Delhi', 'Delhi');
printFulname.apply(name2, ['New Delhi', 'Delhi']);
printFulname.apply(name, ['New Delhi', 'Delhi']);

let printMyName = printFulname.bind(name, 'patna', 'Bihar');
console.log(printMyName);
printMyName();
