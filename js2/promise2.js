setTimeout(() => {
  console.log(1)
}, 0);

new Promise((resolve, reject) => {
  console.log(2);
  setTimeout(() => {
    resolve();
  }, 0);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(4);
});

process.nextTick(() => {
  console.log(5);
});

console.log(6);

//2,6,5,1,3,4
//promise的构造中，没有同步的resolve，因此promise.then在当前的执行队列中是不存在的，
//只有promise从pending转移到resolve，
//才会有then方法，而这个resolve是在一个setTimout时间中完成的，因此3,4最后输出。