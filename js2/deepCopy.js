var a = {
  value: 1,
  study: {
    first: 'JS'
  }
}

// var b = Object.assign({}, a);
var b = { ...a
};
a.study.first = 'HTML';
console.log(b); //{ value: 1, study: { first: 'HTML' } }

//以上情况出现嵌套就要使用深拷贝

var a = {
  value: 1,
  study: {
    first: 'JS'
  }
}

var b = JSON.parse(JSON.stringify(a));
a.study.first = 'HTML';
console.log(a); //{ value: 1, study: { first: 'HTML' } }
console.log(b); //{ value: 1, study: { first: 'JS' } }

//深拷贝的实现

var deepCopy = function (obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      //如果含有嵌套，就递归，否则就直接把obj[key]给newObj[key]
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}

var obj = {
  value: 1,
  study: {
    first: 'JS'
  }
}

var obj2 = deepCopy(obj);
obj.value= 2;
console.log(obj);   //{ value: 2, study: { first: 'JS' } }
console.log(obj2);  //{ value: 1, study: { first: 'JS' } }