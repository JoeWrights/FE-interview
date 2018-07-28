function say() {
  console.log('hello');
  setTimeout(say, 1000)
}
say();