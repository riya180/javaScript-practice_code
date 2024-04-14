const arr = [1, 4, 5, 6, 8, 4, 9, 4];

function findMax(arr) {
  max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));
