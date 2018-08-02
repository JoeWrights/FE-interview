function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {  //第一层循环控制比较多少趟
    for (var j = 0; j < len - 1; j++) { //第二层循环比较多少次
      if (arr[j] > arr[i]) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([2,4,7,3,6,5]));