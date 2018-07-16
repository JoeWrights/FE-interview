// 'use strict';
(function () {
  var a = b = 3;
})()
console.log(typeof a === 'undefined'); //true
console.log(b); //3

//在立即执行函数体内，var a = b =3分解为 
//b = 3; a = b;
//变量b是一个全局变量
//变量a在封闭的立即执行函数作用域下的局部变量

//注意：在严格模式下('use strict')，会报'ReferenceError: b is not defined'
