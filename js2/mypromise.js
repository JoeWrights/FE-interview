function myPromise(constructor) {
  let self = this;
  self.status = 'pending'; //定义状态改变前的初始状态
  self.value = undefined; //定义状态为resolved的时候的状态
  self.reason = undefined; //定义状态为rejected的时候的状态
  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value;
      self.status = 'resolved';
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason
      self.status = 'rejected';
    }
  }
  try {
    constructor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

myPromise.prototype.then = function (onFullFilled, onRejected) {
  // console.log(this);
  let self = this;
  switch (self.status) {
    case 'resolved':
      onFullFilled(self.value);
      break;
    case 'rejected':
      onRejected(self.reason);
      break;
    default:
  }
}
var p = new myPromise(function (resolve, reject) {
  resolve(1)
});
console.log(p);
p.then((x) => {
  console.log(x);
});