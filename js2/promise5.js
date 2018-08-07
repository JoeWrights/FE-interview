//拼多多面试题

console.log(1)
setTimeout(() => {
  console.log(2)
}, 0);
new Promise((resolve) => {
    console.log(3)
    resolve(4)
  })
  .then((num) => {
    console.log(num)
    console.log(5)
  })

console.log(6)

//1, 3, 6, 4, 5, 2