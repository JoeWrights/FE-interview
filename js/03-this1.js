//下面的代码将输出到控制台，为什么？
var obj = {
  foo: "bar",
  func: function(){
    var that = this;
    console.log(`outer func:this.foo ${this.foo}`);   //bar
    console.log(`outer func:that.foo ${that.foo}`);   //bar
    (function(){
      console.log(`inner func:this.foo ${this.foo}`); //undefined
      console.log(`inner func:that.foo ${that.foo}`); //bar
    })()
  }
};
obj.func();

//解析：
//因为是obj调用的func函数，所以此时this指向obj，在外部函数中this指向
//obj，所以that也指向obj；而在内部函数立即执行函数（IIFE）中里面的foo是未定义的所以
//输出undefined，而that 保持在范围内，可以访问foo