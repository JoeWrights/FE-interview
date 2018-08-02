function quickSort(arr) {
  if (arr <= 1) {
    return arr;
  }
  var flag = Math.floor(arr.length / 2);
  var flagValue = arr.splice(flag, 1);
  var left = [],
    right = [];
  for (i = 0, len = arr.length; i < len; i++) {
    if (arr[i] > flagValue) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat(flagValue, quickSort(right));
}

console.log(quickSort([2, 1, 5, 3, 8, 4]));