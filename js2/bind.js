var foo = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}

//传参情况
Function.prototype.bind2 = function (context) {
  // console.log(this);  //bar
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(args);
  var that = this;
  return function () {
    const bindArgs = Array.prototype.slice.call(arguments);
    console.log(bindArgs);
    that.apply(this instanceof that ? this : context, args.concat(bindArgs));
  }
}

const bar2 = bar.bind2(foo, 'daisy');
bar2(19);   //有的参数要的时候再传