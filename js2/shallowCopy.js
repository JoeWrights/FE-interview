//数组的浅拷贝：slice、concat 
//如果数组元素是基本类型，就会拷贝一份，互不影响，
//而如果是对象或者数组，就会只拷贝对象和数组的引用，
//这样我们无论在新旧数组进行了修改，两者都会发生变化。
var arr = ['old', 1, true, null, undefined];
var new_arr = arr.concat();

new_arr[0] = 'new';
console.log(arr); //[ 'old', 1, true, null, undefined ]
console.log(new_arr); //[ 'new', 1, true, null, undefined ]

var arr = [{
    old: 'old'
  },
  ['old']
];
var new_arr = arr.concat();

arr[0].old = 'new';
arr[1][0] = 'new';
console.log(arr) // [{old: 'new'}, ['new']]
console.log(new_arr) // [{old: 'new'}, ['new']]

//浅拷贝的实现

var shallowCopy = (obj) => {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

var a = {
  value: 1,
  study: {
    first: 'JS'
  }
}
var b = shallowCopy(a);
a.study.first = 'HTML';
console.log(b);   //{ value: 1, study: { first: 'HTML' } }


//怎么解决浅拷贝只拷贝引用？(只适用一层)
//1.Object.assign()
var a = {
  age: 1
};
var b = Object.assign({}, a);
a.age = 2;
console.log(b.age); // 1

//2. ...运算符
var a = {
  age: 1
};
var b = {...a};
a.age = 2;
console.log(b.age); // 1