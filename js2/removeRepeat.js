//去重
//1. filter
var array = [1, 2, 1, 1, '1', {a:1}, {a:2}];
function unique(array) {
  var res = array.filter((item, index) => {
    return array.indexOf(item) === index;
  })
  return res;
}
console.log(unique(array));  //[ 1, 2, '1' ]
//缺点：如果内嵌数组或对象，无法去重，并且有NaN的话，会直接过滤掉

//排序后去重
function unique2(array) {
  return array.concat().sort().filter((item, index, array) => {
    return item !== array[index - 1];
  });
}
console.log(unique2(array));
//缺点：如果内嵌数组或对象，并且有NaN的话，无法去重

//es6
//Set
function unique3(array) {
  // return Array.from(new Set(array));
  return [...new Set(array)];
}
console.log(unique3(array));

//缺点：如果内嵌数组或对象，无法去重，NaN可以去重

//Map
function unique4(array) {
  const seen = new Map();
  return array.filter((a) => !seen.has(a) && seen.set(a, 1));
}
console.log(unique4(array));
//缺点：如果内嵌数组或对象，无法去重，NaN可以去重

//键值对方法
function unique5(array) {
  var obj = {};
  return array.filter(function(item, index, array){
      return obj.hasOwnProperty(item) ? false : (obj[item] = true)
  })
}
console.log(unique5(array));

//缺点：会把字符串'1'和 1混淆
//优点：可以对内嵌对象和数组去重

//解决混淆问题
function unique6(array) {
  var obj = {};
  return array.filter(function(item, index, array){
      return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })
}
console.log(unique6(array));
//缺陷：对于内嵌对象，typeof 解析都为 object[object Object]，无法做到绝对的去重

function unique7(array) {
  var obj = {};
  return array.filter(function(item, index, array){
      console.log(typeof item + JSON.stringify(item));
      return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true);
  })
}

console.log(unique7(array));
