var a = [2, 1, 7, 4, 9];
//apply
console.log(Math.max.apply(null, a)); //9

//扩展运算符
console.log(Math.max(...a)); //9

//reduce
function max(prev, next) {
  return Math.max(prev, next);
}
console.log(a.reduce(max)); //9

//排序
a.sort((a, b) => {
  return a - b;
});
console.log(a[a.length - 1]); //9

//eval
var max = eval("Math.max(" + a + ")");
console.log(max); //9

function add(...values) { //累加
  var sum = 0;
  for (value of values) {
    sum += value;
  }
  return sum;
}
console.log(add(1, 2, 3, 4)); //10

