//1、使用 typeof bar === "object" 来确定 bar 是否是对象的潜在陷阱是什么？
//如何避免这个陷阱？
//typeof bar === "object"用来检测是否为对象的方法
let obj = {
  a: 1
};
console.log(typeof obj === 'object'); //true

let arr = [1, 2, 3];
console.log(typeof arr === 'object'); //true

let obj2 = null; //null会被认为空的对象引用
console.log(typeof obj2 === 'object'); //true

let obj3 = {};
console.log(typeof obj3 === 'object'); //true

//从上面可知，当变量的数据类型为null、Array时依然会被检测为object，因此我们要做严谨性校验(排除为空和数组的情况)
let obj4 = [];
console.log(obj4 != null && typeof obj4 === 'object' && toString.call(obj4) != '[object Array]'); //false
//或者
console.log(obj4 != null && typeof obj4 === 'object' && !(obj4 instanceof Array)); //false
//或者
console.log(obj4 != null && typeof obj4 === 'object' && !(Array.isArray(obj4)));