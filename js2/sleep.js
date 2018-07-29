// 如何实现sleep的效果

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function test() {
  const temp = await sleep(1000);
  console.log(1);
  return temp;
}

test();