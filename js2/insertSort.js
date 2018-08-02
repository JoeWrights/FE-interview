function insertSort(arr) {
  var tmp;
  for (var i = 1; i < arr.length; i++) {
    tmp = arr[i];
    for (var j = i; j >= 0; j--) {
      if (arr[j - 1] > tmp) {
        arr[j] = arr[j - 1];
      } else {
        arr[j] = tmp;
        break;
      }
    }
  }
  return arr
}

console.log(insertSort([2, 4, 7, 3, 6, 5]));