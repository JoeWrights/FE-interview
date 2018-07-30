// 闭包 = 函数 + 函数能够访问的自由变量

function bar() {
  var a = 1;
  function foo() {
    console.log(a);
  }
  return foo;
}
var baz = bar();
baz(); //1

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i*1000);
// }

// for (var i = 1; i <= 5; i++) {    //使用闭包解决
//   ((j) => {
//     setTimeout(() => {
//       console.log(j);
//     }, j * 1000);
//   })(i);
// }

// for (var i = 1; i<= 5; i++) {  //使用setTimeout的第三个参数
//   setTimeout((i) => {
//     console.log(i);
//   }, i*1000, i);
// }

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}

var foo = checkscope();
console.log(foo());     //global scope


var data = [];
// for (var i = 0; i< 3; i++) {
//   data[i] = function () {
//     console.log(i);
//   }
// }
for (var i = 0; i< 3; i++) {
  data[i] = ((i) => {
    return () => {
      console.log(i);
    }
  })(i);
}
console.log(data[0](), data[1](), data[2]());