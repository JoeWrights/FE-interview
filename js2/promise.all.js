let p1 = new Promise((resolve, reject) => {
  resolve('成功了');
});

let p2 = new Promise((resolve, reject) => {
  resolve('success');
});

let p3 = Promise.reject('失败了');

Promise.all([p1, p2])
.then(result => console.log(result))  //[ '成功了', 'success' ]
.catch(err => console.log(err));

Promise.all([p1, p2, p3])
.then(result => console.log(result)) 
.catch(err => console.log(err));  //失败了

//Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的

let wake = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time/1000}秒后醒来`, time);
    })
  })
}

let p4 = wake(3000);
let p5 = wake(2000);

Promise.all([p4, p5])
.then((res) => {
  console.log(res); //[ '3秒后醒来', '2秒后醒来' ]
}).catch(err => {
  console.log(err);
})

//p4的结果在前，即便p4的结果获取的比p5要晚。这带来了一个绝大的好处：
//在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，
//使用Promise.all毫无疑问可以解决这个问题。

let p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },1000)
})

let p7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 500)
})

Promise.race([p6, p7]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  // 'failed'
})

//Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])
//里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。
