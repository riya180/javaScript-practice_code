setTimeout(() => {
  console.log('timer');
}, 6000);

function x(y) {
  console.log('x');
  y();
}
x(function y() {
  console.log('y');
});

function attachEventListner() {
  let count = 0;
  document.getElementById('clickMe').addEventListener('click', function xyz() {
    console.log(' Button Clicked ', ++count);
  });
}
attachEventListner();
