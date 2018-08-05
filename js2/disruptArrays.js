//如何快速的去打乱一个数组
//方法一：
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// for (var i=0;i<100;i++) {
//   arr[i] = i;
// }
arr.sort(() => {
  return 0.5 - Math.random();
});
console.log(arr, arr.length);


//方法二：
function shuffle(arr) {
  let i = arr.length;
  while (i) {
    let j = Math.floor(Math.random() * i--);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }
  return arr;
}

console.log(shuffle(arr), arr.length);

//方法三：循环随机位交换法
for (let i = 0, len = arr.length; i < len; i++) {
  let curRadom = Math.floor(Math.random() * len);
  let temp = arr[i];
  arr[i] = arr[curRadom];
  arr[curRadom] = temp;
}
console.log(arr, arr.length);