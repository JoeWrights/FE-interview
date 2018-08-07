//script(主程序代码)—>process.nextTick—>Promises…——>setTimeout——>
//setInterval——>setImmediate——> I/O——>UI rendering

setTimeout(() => {
  console.log(1);
},0);

new Promise((resolve, reject) => {
  console.log(2);
  resolve();
}).then(() => {
  console.log(3);
}).then((num) => {
  console.log(num);
  console.log(4);
}); 

process.nextTick(() => {
  console.log(5);
});

console.log(6);
//2,6,5,3,undefined,4,1

// 定义promise的构造部分是同步的， 
// 因此先输出2 ，主体部分再输出6