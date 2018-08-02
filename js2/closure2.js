const autoIncrement = (() => {
  var i = 0;
  return () => {
    return i++;
  }
})();
console.log(autoIncrement());
console.log(autoIncrement());
console.log(autoIncrement());